import { useState } from "react";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Menu, MenuItem, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router";

import { MORE_LINKS, NAV_LINKS } from "@/constants/nav-links";

const NavLinks = () => {
  const [moreAnchorEl, setMoreAnchorEl] = useState<HTMLElement | null>(null);
  const moreOpen = Boolean(moreAnchorEl);

  return (
    <Stack direction="row" spacing={2}>
      {NAV_LINKS.map(({ label, href }) => (
        <Button
          key={href}
          variant="nav"
          component={RouterLink}
          to={href}
        >
          {label}
        </Button>
      ))}

      <Button
        variant="nav"
        endIcon={moreOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        onClick={(e) => setMoreAnchorEl(e.currentTarget)}
      >
        More
      </Button>

      <Menu
        anchorEl={moreAnchorEl}
        open={moreOpen}
        onClose={() => setMoreAnchorEl(null)}
        slotProps={{ paper: { sx: { mt: 1 } } }}
      >
        {MORE_LINKS.map(({ label, href }) => (
          <MenuItem
            key={href}
            component={RouterLink}
            to={href}
            onClick={() => setMoreAnchorEl(null)}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
};

export default NavLinks;
