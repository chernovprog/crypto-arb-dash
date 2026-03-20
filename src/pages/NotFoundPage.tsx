import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: 2,
        }}
      >
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />

        <Typography variant="h1" component="h1" fontWeight="800" color="textPrimary">
          404
        </Typography>

        <Typography variant="h4" component="h2" fontWeight="500" color="textPrimary">
          Page Not Found
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Sorry, the page you are looking for doesn't exist
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
