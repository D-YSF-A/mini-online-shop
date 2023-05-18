import { useState } from "react";

type Props = {
  setShippingPrice: (value: number) => void;
  setItemPrice: (value: number | null) => void;
};

const ShippingCalculator = ({ setShippingPrice, setItemPrice }: Props) => {
  const [, setWeight] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = parseFloat(event.target.value);
    if (isNaN(newWeight)) {
      setError("Unesite važeću težinu.");
      setShippingPrice(0);
    } else {
      setWeight(newWeight);
      setError(null);
      if (newWeight <= 3) {
        setShippingPrice(newWeight * 15.0);
      } else if (newWeight <= 5) {
        setShippingPrice(newWeight * 14.0);
      } else {
        setShippingPrice(newWeight * 13.0);
      }
    }
  };

  const handleItemPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newItemPrice = parseFloat(event.target.value);
    if (isNaN(newItemPrice)) {
      setError("Unesite važeću cijenu.");
      setItemPrice(null);
    } else {
      setItemPrice(newItemPrice);
      setError(null);
    }
  };

  return (
    <div className="md:w-[50%] flex flex-col gap-4 md:gap-10">
      <div className="flex flex-col relative mt-2 rounded-md shadow-sm gap-3">
        <label
          htmlFor="itemPriceInput"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Cijena proizvoda
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#db5d3c] sm:text-sm sm:leading-6"
          placeholder="0.00"
          type="number"
          id="itemPriceInput"
          name="itemPriceInput"
          onChange={handleItemPriceChange}
        />
      </div>
      <div className="flex flex-col relative mt-2 rounded-md shadow-sm gap-3">
        <label
          htmlFor="weightInput"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Fizička težina
        </label>
        <div className="flex flex-col gap-1">
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#db5d3c] sm:text-sm sm:leading-6"
            type="number"
            id="weightInput"
            name="weightInput"
            onChange={handleWeightChange}
          />
          {error && <p className="text-xs text-red-800">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ShippingCalculator;
