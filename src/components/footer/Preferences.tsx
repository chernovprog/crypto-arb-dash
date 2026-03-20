import LanguageIcon from '@mui/icons-material/Language';
import { Stack, Switch, Typography } from '@mui/material';

import { useColorMode } from "@/hooks/useColorMode";

const Preferences = () => {
  const { isDarkMode, toggleColorMode } = useColorMode();

  return (
    <Stack direction={{ xs: 'row', md: 'column' }} spacing={2}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <LanguageIcon fontSize="small" />
        <Typography variant="body2">English</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body2">Dark theme</Typography>
        <Switch
          checked={isDarkMode}
          onChange={toggleColorMode}
          aria-label="Toggle dark mode"
        />
      </Stack>
    </Stack>
  )
};

export default Preferences;
