import { Stack, Typography } from '@mui/material';

import CompanyFAQ from '@/components/home/CompanyFAQ';
import { COMPANY_FAQS } from '@/constants/home';

const FAQSection = () => {
  return (
    <Stack gap={6} sx={{ mt: 10 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        fontWeight="bold"
      >
        Frequently Asked Questions
      </Typography>

      <Stack gap={4}>
        {COMPANY_FAQS.map((faq, index) => (
          <CompanyFAQ
            key={index}
            index={index}
            title={faq.title}
            content={faq.content}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default FAQSection;
