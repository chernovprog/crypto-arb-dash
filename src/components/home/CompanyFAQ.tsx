import { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Link, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Link as RouterLink } from 'react-router-dom';

import type { ContentSegment } from "@/constants/home";

interface CompanyFAQProps {
  index: number;
  title: string;
  content: ContentSegment[];
}

const NumberedIcon = ({ number }: { number: number }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        borderRadius: 1,
        fontSize: '14px',
        color: 'text.secondary',
        backgroundColor: 'transparent',
        border: (theme) => `1px solid ${theme.vars.palette.background.paper}`,
      }}
    >
      {number}
    </Box>
  );
};


const CompanyFAQ = ({ index, title, content }: CompanyFAQProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      key={index}
      elevation={0}
      disableGutters
      expanded={expanded}
      onChange={(_, expanded) => setExpanded(expanded)}
      sx={{
        backgroundColor: expanded ? 'background.paper' : 'transparent',
        '&:before': {
          display: 'none',
        },
        borderRadius: 1,
        '&.Mui-expanded': {
          borderRadius: 1,
        },
      }}
    >
      <AccordionSummary
        expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
        slotProps={{
          content: { sx: { alignItems: 'center', gap: 2 } },
          expandIconWrapper: { sx: { alignSelf: 'center' } },
        }}
        sx={{
          userSelect: 'text',
        }}
      >
        <NumberedIcon number={index + 1} />
        <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}>
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ pl: 7 }}>
        <Typography color="text.disabled" sx={{ lineHeight: 1.6 }}>
          {content.map((item, idx) => (
            item.link ? (
              <Link
                key={idx}
                component={RouterLink}
                to={item.link}
              >
                {item.text}
              </Link>
            ) : (
              <span key={idx}>{item.text}</span>
            )
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CompanyFAQ;
