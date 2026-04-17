import { AppBar, Box, Link, Stack, Toolbar } from "@mui/material";

import Logo from '@/assets/logo.svg?react';
import HeaderActions from "@/components/header/hooks/HeaderActions";
import NavLinks from "@/components/header/NavLinks";

const Header = () => {

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

          <HeaderActions />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
