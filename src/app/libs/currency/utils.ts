export const calculateConversion = (
  amount: any,
  baseCurrency: string,
  currency: string,
  rates: { [key: string]: number }
) => {
  const value: any = toNumber(amount);

  if (!value || !isNumber(value)) {
    return "";
  }

  return formatPrice(
    (parseFloat(value) * rates[currency]) / rates[baseCurrency]
  );
};

export const formatPrice = (price: any) => {
  const formattedPrice = Math.round(Number(price) * 100) / 100;
  return formattedPrice > 0
    ? formattedPrice.toLocaleString()
    : parseFloat(price).toFixed(10);
};

export const toNumber = (value: any) => {
  const number = parseFloat(`${value}`.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(number)) {
    return 0;
  }
  return number;
};

const regex = /^[-+]?\d+(\.\d+)?$/;

export const isNumber = (value: any) => {
  return regex.test(value);
};
