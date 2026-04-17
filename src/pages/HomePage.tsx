import { Container, Stack } from "@mui/material";

import FAQSection from "@/components/home/FAQSection";
import HeroSection from "@/components/home/HeroSection";
import MarketTable from "@/components/home/MarketTable";
import QuickLinks from "@/components/home/QuickLinks";

const HomePage = () => {

  return (
    <Container
      maxWidth="lg"
      sx={{ py: { xs: 2, md: 6 }, pb: 12 }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        spacing={6}
      >
        <HeroSection />
        <MarketTable />
      </Stack>

      <QuickLinks />
      <FAQSection />
    </Container>
  );
};

export default HomePage;
