import { memo, useMemo } from "react";

import { Stack, Tooltip, Typography } from "@mui/material";
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
    <Stack
      direction="column"
      alignItems="flex-end"
      sx={{ position: 'relative', minHeight: '1.2em' }}
    >
      <Tooltip title={<LazyTime timestamp={ticker.timestamp} />}>
        <div>
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

          <Typography
            component="span"
            variant="caption"
            color="text.secondary"
            sx={{
              position: 'absolute',
              bottom: -10,
              right: 0,
              fontSize: '0.65rem',
              lineHeight: 1,
            }}
          >
            ${formatCryptoPrice(ticker.price) || '---'}
          </Typography>
        </div>
      </Tooltip>
    </Stack>
  );
});

export default PriceCell;
