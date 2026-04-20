import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button, Container, Typography } from '@mui/material';

interface AppInitErrorProps {
  onRetry: () => void;
  message?: string;
}

export const AppInitError = ({ onRetry, message }: AppInitErrorProps) => (
  <Container maxWidth="sm">
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      gap: 2
    }}>
      <Typography variant="h5" color="error">
        Initialization failed
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {message || "We couldn't load the system settings. Please try again or check your internet connection."}
      </Typography>
      <Button
        variant="contained"
        startIcon={<RefreshIcon />}
        onClick={onRetry}
      >
        Retry
      </Button>
    </Box>
  </Container>
);
