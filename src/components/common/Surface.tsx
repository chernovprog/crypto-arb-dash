import { Box, styled } from "@mui/material";

const Surface = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: 'outlined' | 'elevated' }>(({ theme, variant = 'outlined' }) => ({
  borderRadius: 20,
  ...(variant === 'outlined' && {
    border: `1px solid ${theme.vars.palette.divider}`,
  }),
  ...(variant === 'elevated' && {
    boxShadow: theme.shadows[4],
  }),
  padding: theme.spacing(4),
}));

export default Surface;
