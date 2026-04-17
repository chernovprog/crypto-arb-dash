import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Stack } from "@mui/material";

import SearchPopover from "@/components/header/SearchPopover";
import SettingsIcons from "@/components/header/SettingsIcons";
import { useAuth } from "@/providers/Auth/context";

import AuthSection from "../AuthSection";

const HeaderActions = () => {
  const [searchAnchorEl, setSearchAnchorEl] = useState<HTMLElement | null>(null);
  const { isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton
        onClick={(e) => setSearchAnchorEl(e.currentTarget)}
        aria-label="Search"
      >
        <SearchIcon />
      </IconButton>

      <SearchPopover
        anchorEl={searchAnchorEl}
        onClose={() => setSearchAnchorEl(null)}
      />

      <AuthSection />
      <SettingsIcons />
    </Stack>
  );
};

export default HeaderActions;
