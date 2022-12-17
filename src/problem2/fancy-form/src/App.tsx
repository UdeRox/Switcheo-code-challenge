import {
  Avatar,
  Box,
  Brightness4Icon,
  Brightness7Icon,
  createTheme,
  Grid,
  IconButton,
  ThemeProvider,
  useTheme,
} from "@/lib/ui";
import React from "react";
import { HeaderBar } from "./component/HeaderBar";
import "./App.css";
import { SendTokenForm } from "./component/SendTokenForm";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <Box
        sx={{
          // display: "flex-start",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 2,
        }}
      >
        <Grid
          container
          direction={"column"}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            direction={"row"}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid item>
              {/* {theme.palette.mode} mode */}
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
              <Avatar sx={{ width: 24, height: 24 }} />
            </Grid>
          </Grid>

          <Grid item>{/* <SendToken /> */}</Grid>
        </Grid>
      </Box>
      <SendTokenForm />
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          button: {
            textTransform: "none",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
