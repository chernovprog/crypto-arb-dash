import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, IconButton, Link, Stack, Toolbar } from "@mui/material";

import Logo from '@/assets/logo.svg?react';
import AuthSection from "@/components/header/AuthSection";
import NavLinks from "@/components/header/NavLinks";
import SearchPopover from "@/components/header/SearchPopover";
import SettingsIcons from "@/components/header/SettingsIcons";

const Header = () => {
  const [searchAnchorEl, setSearchAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
    >
      <Toolbar sx={{ px: { xs: 1, sm: 2, lg: 3 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={{ xs: 1, md: 4 }}>
            <Link href="/" aria-label="Home">
              <Box
                component={Logo}
                sx={{ height: 40, width: "auto", color: 'text.primary' }}
              />
            </Link>

            <NavLinks />
          </Stack>

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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
