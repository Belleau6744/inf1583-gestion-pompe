export const format = (numStr: number, precision: number = 2) => {
    if (numStr.toString() === '') return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'CAD',
      currencyDisplay: 'narrowSymbol',
      maximumFractionDigits: precision,
    }).format(numStr);
};