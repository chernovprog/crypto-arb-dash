import React from "react";

import LaptopIcon from '@mui/icons-material/Laptop';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import TimelineIcon from '@mui/icons-material/Timeline';

import type { SvgIconProps } from '@mui/material';

export interface Feature {
  icon: React.ComponentType<SvgIconProps>;
  text: string;
}

export const FEATURES: Feature[] = [
  { icon: TimelineIcon, text: 'Real-time price comparison' },
  { icon: QueryStatsIcon, text: 'Arbitrage analysis' },
  { icon: LaptopIcon, text: 'Order management' },
];
