import { createTheme } from '@mui/material/styles';

import { colorSchemes } from "@/theme/palette";

import { components } from './components';
import { typography } from './typography';

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-mui-color-scheme',
  },
  colorSchemes,
  typography,
  shape: {
    borderRadius: 8,
  },
  components,
});
