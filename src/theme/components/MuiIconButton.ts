import type { Components, Theme } from '@mui/material/styles';

const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  defaultProps: {
    disableRipple: true,
    color: 'inherit',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '&:hover': {
        color: theme.vars.palette.primary.main,
      },
    })
  },
  variants: [
    {
      props: { variant: 'thirdParty' },
      style: ({ theme }) => ({
        '&:hover': {
          color: theme.vars.palette.action.active,
        },
      }),
    },
  ],
};

export default MuiIconButton;
