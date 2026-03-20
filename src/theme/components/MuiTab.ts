import type { Components, Theme } from "@mui/material/styles";

const MuiTab: Components<Theme>['MuiTab'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    }),
  },
};

export default MuiTab;
