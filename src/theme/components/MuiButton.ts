import type { ButtonProps } from "@mui/material";
import type { Components, Theme } from '@mui/material/styles';

const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ ownerState }) => {
      const sizeStyles = ['action', 'nav', 'soft'].includes(ownerState.variant ?? '')
        ? getSizeStyles(ownerState.size)
        : {};

      return {
        flexShrink: 0,
        ...sizeStyles,
      };
    },
  },
  variants: [
    {
      props: { variant: 'action' },
      style: ({ theme }) => {
        const btn = theme.vars.palette.components.buttonAction;

        return {
          color: btn.contrastText,
          backgroundColor: btn.main,
          '&:hover': {
            backgroundColor: btn.hover,
          },
          '&:active': {
            backgroundColor: btn.active,
          }
        }
      },
    },
    {
      props: { variant: 'nav' },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.components.buttonNav.contrastText,
          backgroundColor: 'transparent',
          '&:hover': {
            color: theme.vars.palette.primary.main,
            backgroundColor: 'transparent',
          },
        }
      },
    },
    {
      props: { variant: 'soft' },
      style: ({ theme }) => {
        const btn = theme.vars.palette.components.buttonSoft;

        return {
          color: btn.contrastText,
          backgroundColor: btn.main,
          '&:hover': {
            backgroundColor: btn.hover,
          },
        }
      },
    },
  ],
};

type MuiButtonSize = NonNullable<ButtonProps['size']>;

const getSizeStyles = (size?: MuiButtonSize) => {
  if (size === 'small') return { padding: '4px 10px', fontSize: '0.8125rem' };
  if (size === 'large') return { padding: '8px 22px', fontSize: '0.9375rem' };
  return { padding: '6px 16px', fontSize: '0.875rem' };
};

export default MuiButton;
