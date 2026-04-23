const DEFAULT_FRACTION_DIGITS = 2;

export const formatCryptoPrice = (
  value: string | number | null | undefined,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number,
): string | undefined => {
  if (value === null || value === undefined || value === "") return undefined;

  const price = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(price)) return undefined;

  if (!maximumFractionDigits) {
    if (price < 1) {
      const strValue = value.toString();
      const parts = strValue.split('.');

      maximumFractionDigits = parts.length > 1 ? parts[1].length : 0;

      maximumFractionDigits = Math.min(DEFAULT_FRACTION_DIGITS, 10);
    } else {
      maximumFractionDigits = DEFAULT_FRACTION_DIGITS;
    }
  }

  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: minimumFractionDigits || maximumFractionDigits,
    maximumFractionDigits: maximumFractionDigits,
  }).format(price);
};
