import type { Components, Theme } from '@mui/material/styles';

const MuiLink: Components<Theme>['MuiLink'] = {
  defaultProps: {
    underline: 'none',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      transition: 'color 0.1s ease-in-out',
      '&:hover': {
        color: theme.vars.palette.primary.main,
      },
    }),
  },
};

export default MuiLink;
