import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Collapse, IconButton, Link, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

import type { NavLinkItem } from "@/constants/nav-links";

interface ExpandableBlockProps {
  title: string;
  menuItems?: NavLinkItem[];
  children?: React.ReactNode;
  alwaysOpen?: boolean;
  noIndentOnMobile?: boolean;
}

const FOOTER_TITLE_BASE_PROPS = {
  variant: "subtitle1",
  fontWeight: { xs: 500, md: 600 },
} as const;

const ExpandableBlock = ({
  title,
  menuItems,
  children,
  alwaysOpen = false,
  noIndentOnMobile = false,
}: ExpandableBlockProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isMobile && !alwaysOpen) {
      setIsOpen((prev) => !prev);
    }
  };

  const canClick = isMobile && !alwaysOpen;

  return (
    <Stack spacing={{ xs: 1, md: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          {...FOOTER_TITLE_BASE_PROPS}
          sx={{
            ...(canClick && { cursor: 'pointer' })
          }}
          onClick={handleToggle}>
          {title}
        </Typography>

        {!alwaysOpen && (
          <IconButton
            size="small"
            onClick={handleToggle}
            sx={{
              display: { xs: 'flex', md: 'none' },
              '& .MuiSvgIcon-root': { fontSize: 20 },
            }}
          >
            {isOpen ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        )}
      </Stack>

      <Collapse
        in={isOpen || alwaysOpen}
        sx={{
          pl: noIndentOnMobile ? 0 : { xs: 2, md: 0 },
          '& .MuiCollapse-wrapperInner': { display: { md: 'block' } },
          display: { md: 'block' },
          height: { md: 'auto !important' },
          visibility: { md: 'visible' },
        }}
      >
        <Stack alignItems="flex-start" spacing={1}>
          {menuItems?.map((item) => (
            <Link
              key={item.href}
              component={RouterLink}
              to={item.href}
              variant="body2"
              color="textSecondary"
            >
              {item.label}
            </Link>
          ))}
          {children}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default ExpandableBlock;
