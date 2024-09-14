export const FormatToVND = (amountStr: string) => {
  const amount = parseInt(amountStr, 10);

  if (isNaN(amount)) {
    return "Giá trị không hợp lệ";
  }

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "symbol",
  });

  return formatter.format(amount);
};
