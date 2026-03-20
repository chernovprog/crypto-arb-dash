import { type ReactNode } from "react";

import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "@/theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

  return (
    <MuiThemeProvider theme={theme} defaultMode="system">
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
