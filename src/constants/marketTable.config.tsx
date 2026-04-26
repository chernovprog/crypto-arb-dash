import type { JSX } from "react";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Typography } from "@mui/material";

import { formatCryptoPrice } from "@/utils/formatters/price";

import type { CurrencyShortInfoDto } from "@/types";

type CurrencyField = Exclude<keyof CurrencyShortInfoDto, 'symbol'>;
type FieldValue = CurrencyShortInfoDto[CurrencyField];

interface ColumnConfig<K extends CurrencyField = CurrencyField> {
  id: K;
  label: string;
  align?: 'left' | 'center' | 'right';
  minWidth?: number;
  format?: (value: FieldValue) => string | JSX.Element;
}

const formatCurrencyName = (value: FieldValue) => {
  return (
    <Typography
      component="span"
      variant="body2"
      fontWeight="medium"
      color="text.primary"
    >
      {value}
    </Typography>
  )
}

const formatPercentChangeValue = (value: FieldValue) => {
  const numValue = Number(value);
  const isPositive = numValue >= 0;

  return (
    <Typography
      component="span"
      color={numValue >= 0 ? 'up.main' : 'down.main'}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        fontWeight: 500,
      }}
    >
      {isPositive ? (
        <ArrowDropUpIcon sx={{ fontSize: '1.2rem' }} />
      ) : (
        <ArrowDropDownIcon sx={{ fontSize: '1.2rem' }} />
      )}
      {Math.abs(numValue).toFixed(2)}%
    </Typography>
  )
}

const formatMarketCap = (value: FieldValue) => {
  const num = Number(value);
  return `$${num.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
};

export const columns: ColumnConfig[] = [
  {
    id: 'name',
    label: 'Name',
    align: 'left',
    minWidth: 200,
    format: formatCurrencyName,
  },
  {
    id: 'price',
    label: 'Price',
    align: 'right',
    minWidth: 200,
    format: (value) => `$${formatCryptoPrice(value)}`
  },
  {
    id: 'percentChange1h',
    label: '1h %',
    align: 'right',
    minWidth: 100,
    format: formatPercentChangeValue,
  },
  {
    id: 'percentChange24h',
    label: '24h %',
    align: 'right',
    minWidth: 100,
    format: formatPercentChangeValue,
  },
  {
    id: 'percentChange7d',
    label: '7d %',
    align: 'right',
    minWidth: 100,
    format: formatPercentChangeValue,
  },
  {
    id: 'marketCap',
    label: 'Market Cap',
    align: 'right',
    minWidth: 200,
    format: formatMarketCap,
  },
  {
    id: 'volume24h',
    label: 'Volume(24h)',
    align: 'right',
    minWidth: 200,
    format: formatMarketCap,
  }
]
