import {
  Avatar,
  Brightness4Icon,
  Brightness7Icon,
  Grid,
  IconButton,
  useTheme,
} from "@/lib/ui";
import React from "react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export const HeaderBar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <Grid container direction="row">
        <Grid item>Fancy Form</Grid>
        <Grid item>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Grid>
        <Grid item>
          <Avatar />
        </Grid>
      </Grid>
    </>
  );
};
