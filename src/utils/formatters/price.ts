const DEFAULT_NUMBER_DIGITS_AFTER_DECIMAL_POINT = 2;
const MAX_NUMBER_DIGITS_AFTER_DECIMAL_POINT = 10;
const MAX_NUMBER_DIGITS_AFTER_NON_ZERO_DIGIT_DECIMAL_PART = 4;

export const formatCryptoPrice = (
  value: string | number | null | undefined,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number,
): string | undefined => {
  if (value === null || value === undefined || value === "") return undefined;

  const price = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(price)) return undefined;

  if (!maximumFractionDigits) {
    if (price >= 1) {
      maximumFractionDigits = DEFAULT_NUMBER_DIGITS_AFTER_DECIMAL_POINT;
    } else {
      const strValue = value.toString();
      const decimalPart = strValue.split('.')[1];

      let firstNonZeroDigitIndex = 0;
      for (let i = 0; i < decimalPart.length; i++) {
        if (decimalPart.charAt(i) !== '0') {
          firstNonZeroDigitIndex = i;
          break;
        }
      }

      maximumFractionDigits = firstNonZeroDigitIndex + MAX_NUMBER_DIGITS_AFTER_NON_ZERO_DIGIT_DECIMAL_PART;

      maximumFractionDigits = Math.min(maximumFractionDigits, MAX_NUMBER_DIGITS_AFTER_DECIMAL_POINT);
    }
  }

  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: minimumFractionDigits ?? DEFAULT_NUMBER_DIGITS_AFTER_DECIMAL_POINT,
    maximumFractionDigits: maximumFractionDigits,
  }).format(price);
};
