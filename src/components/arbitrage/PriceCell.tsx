import { memo, useMemo } from "react";

import { Skeleton, Tooltip, Typography } from "@mui/material";
import { format } from "date-fns";

import { usePriceStore } from "@/components/arbitrage/store/usePriceStore";
import { formatCryptoPrice } from "@/utils/formatters/price";

import type { Ticker } from "@/types";

interface PriceCellProps {
  exchange: string;
  baseCurrencyId: number;
}

const LazyTime = ({ timestamp }: { timestamp: number }) => {

  const formattedTime = useMemo(() =>
      format(new Date(timestamp), 'HH:mm:ss'),
    [timestamp]);

  return <>Updated: {formattedTime}</>;
};

const PriceCell = memo(({
  exchange, baseCurrencyId
}: PriceCellProps) => {

  const ticker: Ticker | undefined = usePriceStore(
    (state) => state.prices.get(exchange)?.get(baseCurrencyId)
  );

  if (!ticker) {
    return (
      <Skeleton
        variant="rectangular"
        sx={{
          display: 'inline-block',
          width: '100px',
          height: '1.2em',
          borderRadius: '4px',
        }}
      />
    );
  }

  return (
    <Tooltip title={<LazyTime timestamp={ticker.timestamp} />}>
      <Typography
        component="span"
        sx={{
          minWidth: '100px',
          textAlign: 'right',
          fontFamily: 'monospace',
          color: ticker.priceDirection === 'down' ? 'down.main' : 'up.main',
        }}
      >
        {formatCryptoPrice(ticker?.price) || '---'}
      </Typography>
    </Tooltip>
  );
});

export default PriceCell;
