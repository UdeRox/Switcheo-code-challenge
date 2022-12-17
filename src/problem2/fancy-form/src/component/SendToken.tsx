import { FormControl, Grid, TextField } from "@/lib/ui";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum, faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faDollarSign, faBars } from "@fortawesome/free-solid-svg-icons";

// const element = <FontAwesomeIcon icon={faCoffee} />
export const mySolidIcon = () => <FontAwesomeIcon icon={faEthereum} />;
const faPropIcon = faEthereum as IconProp;

export const SendToken: React.FC = () => {
  const ETH_ADDRESS_REGEX = /^0x[0-9A-Fa-f]{40}$/;
  const ethAddressValidation = new RegExp(ETH_ADDRESS_REGEX);
  const [valid, setValid] = useState(false);
  const [currency, setCurrancy] = useState("ETH");
  const [amount, setAmount] = useState(0);
  const EXCHANGE_RATE = 1270.55;

  const handleValidation = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValid(!ethAddressValidation.test(event.target.value));
  };

  const onChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number.parseFloat(event.target.value));
  };

  const setMaxValue = () => {
    setAmount(10000);
  };

  const changeCurrency = () => {
    // setCurrancy(currency == 'ETH' ? '$': 'ETH')
    if (currency == "ETH") {
      setCurrancy("$");
      setAmount(amount * EXCHANGE_RATE);
    } else {
      setAmount(amount / EXCHANGE_RATE);
      setCurrancy("ETH");
    }
  };

  return (
    // <FormControl>
    <Paper elevation={3}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        // justifyContent="center"
        md={8}
      >
        <Grid item xs={12}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            label={`ETH Address ${"❤️"}`}
            variant="standard"
            id="eth-address"
            type="text"
            size="small"
            // color="success"
            onChange={(e) => handleValidation(e)}
            error={valid}
            aria-describedby="component-error-text"
          />
          {/* <FormHelperText id="component-error-text">Not an valid ETH address</FormHelperText> */}
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" alignItems={"center"}>
            <Grid item xs={7}>
              <TextField
                InputProps={{
                  startAdornment: (
                    // <InputAdornment position="start"><FontAwesomeIcon icon="fa-brands fa-ethereum" /></InputAdornment>
                    <InputAdornment position="start">
                      {currency == "ETH" ? (
                        <FontAwesomeIcon icon={faEthereum} />
                      ) : (
                        <FontAwesomeIcon icon={faDollarSign} />
                      )}
                    </InputAdornment>
                  ),
                }}
                fullWidth
                size="small"
                label="Amount Send"
                variant="standard"
                id="amount-send"
                type="number"
                onChange={onChangeAmount}
                defaultValue={amount}
                value={amount}
              />
            </Grid>
            <Grid item>
              <button onClick={setMaxValue}>Max</button>
            </Grid>
            <Grid item>
              <button onClick={changeCurrency}>
                {currency == "ETH" ? "USD" : "ETH"}
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            label="OTP Authentication"
            variant="standard"
            id="otp-auth"
            type="text"
          />
        </Grid>
        <Grid item xs={12}>
          <button type="submit">Send Token</button>
          <button type="submit">Cancel</button>
        </Grid>
      </Grid>
    </Paper>
    // </FormControl>
  );
};
