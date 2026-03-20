import type { Components, Theme } from "@mui/material/styles";

const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: (theme) => ({
    body: {
      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: theme.vars.palette.scrollbar.main,
        border: `2px solid ${theme.vars.palette.background.default}`,
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: theme.vars.palette.scrollbar.dark,
        borderColor: theme.vars.palette.scrollbar.dark,
      },
    },
  })
}

export default MuiCssBaseline;