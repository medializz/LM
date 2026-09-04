/**
 * Safe number and currency formatting utilities that never throw on null/undefined/non-numeric inputs.
 */
export function safeFormatPrice(price: unknown): string {
  if (price === null || price === undefined) return '0';
  if (typeof price === 'number') {
    return isNaN(price) ? '0' : price.toLocaleString();
  }
  const num = Number(price);
  if (!isNaN(num)) {
    return num.toLocaleString();
  }
  return String(price).trim();
}

export function formatPriceWithCurrency(price: unknown, currency: string = '£'): string {
  return `${currency}${safeFormatPrice(price)}`;
}
