import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, Stack } from "@mui/material";

import { useColorMode } from "@/hooks/useColorMode";

const SettingsIcons = () => {
  const { isDarkMode, toggleColorMode } = useColorMode();

  return (
    <Stack direction="row">
      <IconButton aria-label="Change language">
        <LanguageIcon />
      </IconButton>
      <IconButton onClick={toggleColorMode} aria-label="Toggle theme">
        {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Stack>
  );
};

export default SettingsIcons;
