import { Button, Stack, TextField, Typography } from '@mui/material';

import FeaturesList from "@/components/home/FeaturesList";

export default function HeroSection() {
  return (
    <Stack flex={1} spacing={4}>
      <Typography
        variant="h1"
        component="h1"
        fontSize={{ xs: '2rem', md: '3rem' }}
      >
        Discover Profitable Arbitrage Opportunities
      </Typography>

      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
        <TextField
          autoComplete="email"
          id="email"
          label="Email"
          name="email"
          size="small"
          sx={{ maxWidth: 300, flex: 1 }}
        />
        <Button variant="action" size="large">
          Sign up
        </Button>
      </Stack>

      <Stack spacing={3} sx={{ mt: 2 }}>
        <Typography variant="h6" component="h3" fontWeight="bold" lineHeight={1.4}>
          Compare prices across exchanges, analyze differences,
          <br />
          and manage orders seamlessly
        </Typography>

        <FeaturesList />
      </Stack>
    </Stack>
  );
}
