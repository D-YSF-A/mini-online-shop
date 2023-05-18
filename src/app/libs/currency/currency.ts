import { fetchConversionRates } from '@/app/api/currencyRates';

export const getConversionRates = async () => {
  try {
    const data = await fetchConversionRates();
    const rates = data.rates;
    return rates;
  } catch (error) {
    console.log(error);
    return null;
  }
};
