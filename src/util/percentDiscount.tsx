export const PercentDiscount = (original: string, current: string) => {
  const originalPrice = parseInt(original, 10);
  const currentPrice = parseInt(current, 10);
  const percent = Math.floor(((originalPrice - currentPrice) / originalPrice) * 100);

  return percent;
};
