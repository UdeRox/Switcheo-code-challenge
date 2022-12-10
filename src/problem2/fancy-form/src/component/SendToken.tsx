import { FormControl, Grid, TextField } from "@/lib/ui";

export const SendToken: React.FC = () => {
  const ETH_ADDRESS_REGEX = /^0x[0-9A-Fa-f]{40}$/;

  return (
    <FormControl>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="ETH Address"
            variant="standard"
            id="eth-address"
            type="text"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Amount Send"
            variant="standard"
            id="amount-send"
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
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
    </FormControl>
  );
};
