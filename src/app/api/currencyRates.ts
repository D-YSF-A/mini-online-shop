import axios from "axios";

export const fetchConversionRates = async () => {
  try {
    const { data } = await axios.get(
      `http://data.fixer.io/api/latest?cbase=USD&access_key=35a3ad0f2f253d37131b68cd1b5953fc`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
