import type { Components, Theme } from "@mui/material/styles";

const MuiTableRow: Components<Theme>['MuiTableRow'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '&:hover': {
        backgroundColor: theme.vars.palette.action.hover,
        cursor: 'pointer',
        '& .MuiTableCell-root:first-of-type': {
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        },
        '& .MuiTableCell-root:last-of-type': {
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        },
      }
    })
  }
};

export default MuiTableRow;
