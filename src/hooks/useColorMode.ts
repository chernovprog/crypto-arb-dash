import { useColorScheme } from "@mui/material";

export const useColorMode = () => {
  const { mode, setMode, systemMode } = useColorScheme();

  const isDarkMode = mode === 'system' ? systemMode === 'dark' : mode === 'dark';

  const toggleColorMode = () => {
    setMode(isDarkMode ? 'light' : 'dark');
  };

  return { mode, isDarkMode, toggleColorMode };
};
