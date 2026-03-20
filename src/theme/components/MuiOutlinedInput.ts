import type { Components, Theme } from "@mui/material/styles";

const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiOutlinedInput-notchedOutline': {
        transition: 'border-color 0.5s ease-in-out',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.vars.palette.primary.main,
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px',
      },
    })
  }
};

export default MuiOutlinedInput;
