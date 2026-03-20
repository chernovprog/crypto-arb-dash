import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton, Stack } from '@mui/material';

const SocialIcons = () => (
  <Stack direction="row" spacing={1}>
    <IconButton variant="thirdParty" aria-label="Telegram" sx={{ pl: 0 }}>
      <TelegramIcon />
    </IconButton>
    <IconButton variant="thirdParty" aria-label="Facebook">
      <FacebookIcon />
    </IconButton>
    <IconButton variant="thirdParty" aria-label="Instagram">
      <InstagramIcon />
    </IconButton>
    <IconButton variant="thirdParty" aria-label="Twitter">
      <TwitterIcon />
    </IconButton>
  </Stack>
);

export default SocialIcons;
