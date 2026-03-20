import { useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "@/providers/Auth/context";

const AuthSection = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>(null);

  const profileOpen = Boolean(profileAnchorEl);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Logout error:", error);
      // TODO: Add UI feedback, e.g., toast
    } finally {
      setProfileAnchorEl(null);
    }
  };

  if (!isAuthenticated || !user) {
    return (
      <Stack direction="row" spacing={1}>
        <Button
          variant="soft"
          size="small"
          component={Link}
          to="/login"
        >
          Log In
        </Button>
        <Button
          variant="action"
          size="small"
          component={Link}
          to="/signup"
        >
          Sign Up
        </Button>
      </Stack>
    );
  }

  return (
    <>
      <IconButton
        onClick={(e) => setProfileAnchorEl(e.currentTarget)}
        aria-label="Profile"
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        open={profileOpen}
        anchorEl={profileAnchorEl}
        onClose={() => setProfileAnchorEl(null)}
      >
        <MenuItem disabled>
          <Typography variant="body2">{user.name || user.email}</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </>
  );
};

export default AuthSection;
