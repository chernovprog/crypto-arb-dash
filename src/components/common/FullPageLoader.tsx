import { Box, CircularProgress, type SxProps, type Theme } from '@mui/material';

interface FullPageLoaderProps {
  fullScreen?: boolean;
  size?: number | string;
  sx?: SxProps<Theme>;
}

export const FullPageLoader = ({
  fullScreen = false,
  size = 40,
  sx
}: FullPageLoaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: fullScreen ? '100vh' : '100%',
        minHeight: fullScreen ? 'auto' : '200px',
        ...sx
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};
