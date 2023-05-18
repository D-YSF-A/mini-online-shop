import { CURRENCIES } from "@/app/libs/currency/constants";
import { InputGroupProps } from "@/app/libs/currency/types";

const InputGroup = ({
  name,
  selectName,
  value,
  selectedCurrency,
  error,
  onChange,
  onSelect,
}: InputGroupProps) => {
  return (
    <>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="text"
          name={name}
          className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-[#ff6d48] focus:ring-[#ff6d48] sm:text-sm"
          placeholder="0.00"
          value={value || ""}
          onChange={onChange}
          autoComplete="off"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label className="sr-only">Currency</label>
          <select
            name={selectName}
            className="h-full rounded-md border-none bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-none ring-0 focus:ring-0 text-xs md:text-sm text-right md:text-left"
            value={selectedCurrency}
            onChange={onSelect}
          >
            {CURRENCIES?.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
};

export default InputGroup;
