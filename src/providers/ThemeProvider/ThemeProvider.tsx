import {
  CssBaseline,
  ThemeProvider as ThemeProviderMUI,
  createTheme,
} from "@mui/material";
import { PropsWithChildren } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProviderMUI theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProviderMUI>
  );
}
