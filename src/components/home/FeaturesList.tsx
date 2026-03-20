import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { FEATURES } from '@/constants/home';

export default function FeaturesList() {
  return (
    <List disablePadding>
      {FEATURES.map((feature, index) => (
        <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <feature.icon color="primary" />
          </ListItemIcon>
          <ListItemText primary={feature.text} />
        </ListItem>
      ))}
    </List>
  );
}
