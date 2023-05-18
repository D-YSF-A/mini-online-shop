"use client";

import InputGroup from "@/app/components/elements/CalculatorInput/CalculatorInput";
import { getConversionRates } from "@/app/libs/currency/currency";
import { Rates } from "@/app/libs/currency/types";
import { calculateConversion } from "@/app/libs/currency/utils";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

const Calculator = () => {
  const [baseCurrency, setBaseCurrency] = useState("BAM");
  const [targetCurrency, setTargetCurrency] = useState("TRY");

  const [baseAmount, setBaseAmount] = useState("");
  const [targetAmount, setTargetAmount] = useState("");

  const [rates, setRates] = useState({} as Rates);

  const [action, setAction] = useState("");

  const onBaseAmountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setBaseAmount(e.target.value);
    setAction("base-to-target");
  }, []);

  const onTargetAmountChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTargetAmount(e.target.value);
      setAction("target-to-base");
    },
    []
  );

  const onBaseCurrencyChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setBaseCurrency(e.target.value);
      setAction("base-to-target");
    },
    []
  );

  const onTargetCurrencyChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setTargetCurrency(e.target.value);
      setAction("target-to-base");
    },
    []
  );

  const fetchRates = useCallback(async () => {
    const data = await getConversionRates();
    setRates(data as Rates);
  }, []);

  useEffect(() => {
    fetchRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (rates) {
      if (action === "base-to-target") {
        setTargetAmount(
          calculateConversion(
            baseAmount,
            baseCurrency,
            targetCurrency,
            rates as Rates
          )
        );
      } else if (action === "target-to-base") {
        setBaseAmount(
          calculateConversion(
            targetAmount,
            targetCurrency,
            baseCurrency,
            rates as Rates
          )
        );
      }
    }
  }, [targetAmount, baseAmount, baseCurrency, targetCurrency, rates, action]);

  return (
    <div className="flex flex-col items-center py-40">
      <h1 className="font-bold tracking-tight text-gray-800 text-4xl md:pt-12 lg:pt-0 pb-8">
        Kalkulator Kursa Valute
      </h1>
      <div className="w-[500px] px-2 md:px-5 pt-7 pb-4">
        <div className="mb-4">
          <InputGroup
            name="baseAmount"
            selectName="baseCurrency"
            value={baseAmount}
            selectedCurrency={baseCurrency}
            onChange={onBaseAmountChange}
            onSelect={onBaseCurrencyChange}
          />
        </div>

        <div className="mb-4">
          <InputGroup
            name="targetAmount"
            selectName="targetCurrency"
            value={targetAmount}
            selectedCurrency={targetCurrency}
            onChange={onTargetAmountChange}
            onSelect={onTargetCurrencyChange}
          />
        </div>

        {rates && (
          <div className="flex flex-col md:flex-row md:justify-between items-center text-xs text-slate-500">
            <p>
              {`1 ${baseCurrency} je ${calculateConversion(
                1,
                baseCurrency,
                targetCurrency,
                rates as Rates
              )} ${targetCurrency}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
