import { memo } from "react";

import { Stack, Tooltip, Typography } from "@mui/material";

import CellTime from "@/components/arbitrage/CellTime";
import SkeletonTableCell from "@/components/common/SkeletonTableCell";
import { usePriceStore } from "@/store/arbitrage/usePriceStore";
import { formatCryptoPrice } from "@/utils/formatters/price";

import type { Ticker } from "@/types";

interface PriceCellProps {
  exchange: string;
  baseCurrencyId: number;
}

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
      <Tooltip title={<CellTime timestamp={ticker.timestamp} />}>
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

      <Typography
        component="span"
        variant="caption"
        color="text.secondary"
        sx={{
          position: 'absolute',
          bottom: -11,
          right: 0,
          fontSize: '0.65rem',
          lineHeight: 1,
        }}
      >
        ${formatCryptoPrice(ticker.price) || '---'}
      </Typography>
    </Stack>
  );
});

export default PriceCell;
