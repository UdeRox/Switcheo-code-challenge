import { createTheme, CssBaseline, ThemeProvider } from "@/lib/ui";
import React from "react";
import "./App.css";
import { HeaderBar } from "./component/HeaderBar";
import { SendTokenForm } from "./component/SendTokenForm";
import "./index.css";

export default function App() {
  const [prefersDarkMode, setPrefersDarkMode] = React.useState(false);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderBar buttonClick={() => setPrefersDarkMode(!prefersDarkMode)} />
      <SendTokenForm />
    </ThemeProvider>
  );
}
