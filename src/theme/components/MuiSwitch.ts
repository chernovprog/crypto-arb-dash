import type { Components, Theme } from "@mui/material/styles";

const MuiSwitch: Components<Theme>['MuiSwitch'] = {
  defaultProps: {
    color: 'default',
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      '&:hover': {
        backgroundColor: 'transparent !important',
      },
    },
    switchBase: {
      '&:hover': {
        backgroundColor: 'transparent !important',
      },
    },
  },
};

export default MuiSwitch;
