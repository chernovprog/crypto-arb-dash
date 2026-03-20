import React from "react";

import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

import { QUICK_LINKS } from "@/constants/home";

const QuickLinks = () => {

  const renderLink = (to: string, content: React.ReactNode) => (
    <Link
      component={RouterLink}
      to={to}
      color="textPrimary"
      sx={{ display: 'contents' }}
    >
      {content}
    </Link>
  );

  return (
    <Grid
      container
      spacing={3}
      sx={{ mt: 10, width: '100%' }}
    >
      {QUICK_LINKS.map((quickLink, index) => (
        <Grid
          key={index}
          size={{ xs: 12, sm: 6, md: 3 }}
        >
          <Stack alignItems="center">
            {renderLink(
              quickLink.path,
              <Box
                component="img"
                src={quickLink.imageUrl}
                alt={quickLink.title}
                sx={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 2,
                  transition: 'opacity 0.3s ease-in-out',
                  '&:hover': { opacity: 0.8 }
                }}
              />
            )}

            {renderLink(
              quickLink.path,
              <Typography
                variant="subtitle1"
                component="h3"
                sx={{ mt: 0.5 }}
              >
                {quickLink.title}
              </Typography>
            )}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuickLinks;
