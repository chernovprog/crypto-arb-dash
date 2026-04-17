export const formatCryptoPrice = (
  value: string | number | null | undefined
): string | undefined => {
  if (value === null || value === undefined || value === "") return undefined;

  const price = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(price)) return undefined;

  let fractionDigits = 2;

  if (price < 1) {
    const strValue = value.toString();
    const parts = strValue.split('.');

    fractionDigits = parts.length > 1 ? parts[1].length : 0;

    fractionDigits = Math.min(fractionDigits, 10);
  }

  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(price);
};
