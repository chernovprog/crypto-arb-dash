import { Stack, Typography } from "@mui/material";

import SkeletonTableCell from "@/components/common/SkeletonTableCell";
import { useSpreadStore } from "@/store/useSpreadStore";
import { formatCryptoPrice } from "@/utils/formatters/price";

interface MaxSpreadProps {
  baseCurrencyId: number;
}

const MaxSpread = ({ baseCurrencyId }: MaxSpreadProps) => {
  const spread = useSpreadStore((state) => state.spreads.get(baseCurrencyId));

  if (!spread) {
    return <SkeletonTableCell width={100} />;
  }

  const { amount, percentage } = spread;

  return (
    <Stack
      direction="column"
      alignItems="flex-end"
      sx={{ position: 'relative', minHeight: '1.2em' }}
    >
      <Typography
        component="span"
        variant="body2"
        fontWeight="medium"
      >
        {formatCryptoPrice(percentage, 2, 2)}%
      </Typography>

      <Typography
        component="span"
        variant="caption"
        color="text.secondary"
        sx={{
          position: 'absolute',
          bottom: -12,
          right: 0,
          fontSize: '0.65rem',
          lineHeight: 1,
        }}
      >
        {formatCryptoPrice(amount, 4, 4)}
      </Typography>
    </Stack>
  );
}

export default MaxSpread;
