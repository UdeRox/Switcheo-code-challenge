import { faDollarSign, faEthereum, FontAwesomeIcon } from "@/lib/fontawsesome";
import React, { useState } from "@/lib/react";
import { Controller, SubmitHandler, useForm } from "@/lib/react-hook-form";
import { Box, Button, Grid, InputAdornment, TextField } from "@/lib/ui";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

interface IFormInputs {
  ethAddress: string;
  sendAmount: number;
  otp: string;
}

enum Currency {
  ETH = "ETH",
  USD = "USD",
}

const ButtonRoot = styled("div")(({ theme }: any) => ({
  padding: theme.spacing(1),
  button: {
    position: "fixed",
    bottom: 15,
    [theme.breakpoints.up("sm")]: {
      position: "relative",
    },
  },
}));

export const SendTokenForm: React.FC = () => {
  const [currency, setCurrancy] = useState<Currency>(Currency.ETH);
  const {
    handleSubmit,
    control,
    setError,
    clearErrors,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      ethAddress: "",
      sendAmount: 0,
      otp: "",
    },
  });
  const ETH_ADDRESS_REGEX = /^0x[0-9A-Fa-f]{40}$/;
  const ethAddressValidation = new RegExp(ETH_ADDRESS_REGEX);
  const ethAddress = watch("ethAddress");
  const sendAmount = watch("sendAmount");
  const otp = watch("otp");
  const EXCHANGE_RATE = 1270.55;
  const MAX_AMOUNT = 10;
  const ethAddressError = errors.ethAddress?.message;
  const sendAmountError = errors.sendAmount?.message;
  const otpError = errors.otp?.message;

  //Form validation
  useFormValidation();

  React.useEffect(() => {
    setValue(
      "sendAmount",
      currency == Currency.ETH
        ? sendAmount / EXCHANGE_RATE
        : sendAmount * EXCHANGE_RATE
    );
  }, [currency]);

  const setMaxValue = () => {
    //Set max amount as 10ETH.
    setValue(
      "sendAmount",
      currency == Currency.ETH ? MAX_AMOUNT : MAX_AMOUNT * EXCHANGE_RATE
    );
  };

  const changeCurrency = () => {
    if (currency == Currency.ETH) {
      setCurrancy(Currency.USD);
    } else {
      setCurrancy(Currency.ETH);
    }
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    // <Paper elevation={0}>
    <Box sx={{ p: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Controller
              name="ethAddress"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  size="small"
                  fullWidth
                  color={ethAddressError ? "error" : "success"}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    style: { font: "75% Helvetica, sans-serif" },
                  }}
                  error={!!ethAddressError}
                  helperText={ethAddressError}
                  label={`ETH Address ${
                    ethAddressError || !ethAddress ? "" : "✅"
                  }`}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={1}
              direction={"row"}
              alignContent={"baseline"}
              alignItems="center"
            >
              <Grid item xs={6} md={6}>
                <Controller
                  name="sendAmount"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {currency == "ETH" ? (
                              <FontAwesomeIcon icon={faEthereum} />
                            ) : (
                              <FontAwesomeIcon icon={faDollarSign} />
                            )}
                          </InputAdornment>
                        ),
                        style: { font: "75% Helvetica, sans-serif " },
                      }}
                      variant="standard"
                      size="small"
                      fullWidth
                      color={sendAmountError ? "error" : "success"}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      type="number"
                      error={!!sendAmountError}
                      helperText={sendAmountError}
                      label={`Send Amount ${
                        sendAmountError || !sendAmount ? "" : "✅"
                      }`}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Button onClick={setMaxValue} variant="outlined" size="small">
                  Max
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={changeCurrency}
                  variant="outlined"
                  size="small"
                >
                  {currency == Currency.ETH ? Currency.USD : Currency.ETH}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Controller
              name="otp"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  size="small"
                  fullWidth
                  color={otpError ? "error" : "success"}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    style: { font: "75% Helvetica, sans-serif" },
                  }}
                  type="number"
                  label={`OTP ${otpError || !otp ? "" : "✅"}`}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction={"row"}
              // justifyContent="center"
              justifyContent="space-around"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <ButtonRoot>
                  <Button onClick={() => {}} variant="outlined" size="large">
                    Cancel
                  </Button>
                </ButtonRoot>
              </Grid>
              <Grid item>
                <ButtonRoot>
                  <Button
                    onClick={() => {}}
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </ButtonRoot>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
    // </Paper>
  );

  //Form validation, this need to be refactored to a seperate hook
  function useFormValidation() {
    React.useEffect(() => {
      const subscription = watch((data) => {
        const { ethAddress = "", sendAmount = 0 } = data;
        if (!(ethAddress == "") && !ethAddressValidation.test(ethAddress))
          setError("ethAddress", {
            type: "manual",
            message: "Invalid ETH address.",
          });
        else clearErrors("ethAddress");

        const tempSendAmount =
          currency == Currency.ETH ? sendAmount : sendAmount / EXCHANGE_RATE;

        if (tempSendAmount > MAX_AMOUNT)
          setError("sendAmount", {
            type: "manual",
            message: "Don't have enough crypto.",
          });
        else clearErrors("sendAmount");
      });
      return () => {
        subscription.unsubscribe();
      };
    }, [watch, currency]);
  }
};
