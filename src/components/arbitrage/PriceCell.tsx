import { memo, useMemo } from "react";

import { Tooltip, Typography } from "@mui/material";
import { format } from "date-fns";

import SkeletonTableCell from "@/components/common/SkeletonTableCell";
import { usePriceStore } from "@/store/arbitrage/usePriceStore";
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

  if (!ticker?.price) {
    return <SkeletonTableCell width={100} />;
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
        {formatCryptoPrice(ticker.price) || '---'}
      </Typography>
    </Tooltip>
  );
});

export default PriceCell;
