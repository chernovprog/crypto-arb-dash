import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import ExpandableBlock from "@/components/footer/ExpandableBlock";
import Preferences from "@/components/footer/Preferences";
import SocialIcons from "@/components/footer/SocialIcons";
import { FOOTER_LINKS_ABOUT, FOOTER_LINKS_PRODUCTS, FOOTER_LINKS_SUPPORT } from "@/constants/nav-links";

const Footer = () => {

  return (
    <Box
      component="footer"
      sx={{
        color: 'text.secondary',
        bgcolor: 'footer.main',
        mt: 8,
      }}
    >
      <Divider />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 1, md: 6 }}>
          <Grid
            size={{ xs: 12, md: 4 }}
            order={{ xs: 4, md: 1 }}
            sx={{
              mt: { xs: 3, md: 0 }
            }}
          >
            <ExpandableBlock
              title="Community"
              alwaysOpen
              noIndentOnMobile
            >
              <SocialIcons />
              <Preferences />
            </ExpandableBlock>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }} order={{ xs: 1, md: 2 }}>
            <ExpandableBlock
              title="About Us"
              menuItems={FOOTER_LINKS_ABOUT}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 2 }} order={{ xs: 2, md: 3 }}>
            <ExpandableBlock
              title="Products"
              menuItems={FOOTER_LINKS_PRODUCTS}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 2 }} order={{ xs: 3, md: 4 }}>
            <ExpandableBlock
              title="Support"
              menuItems={FOOTER_LINKS_SUPPORT}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, md: 6 } }} />

        <Stack spacing={3}>
          <Typography variant="caption" lineHeight={1.6}>
            Risk Warning: virtual asset prices can be volatile. The value of your investment may go down or up
            and you may not get back the amount invested. You are solely responsible for your investment
            decisions and ArbGet is not liable for any trading losses you may incur.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2">
              ArbGet © {new Date().getFullYear()}
            </Typography>

            <Link
              component={RouterLink}
              to="/privacy-policy"
              variant="body2"
              color="inherit"
            >
              Cookie Preferences
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
