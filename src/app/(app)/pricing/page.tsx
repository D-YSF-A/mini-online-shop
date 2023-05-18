"use client";

import { useState } from "react";
import AdditionalServices from "../../components/elements/Pricing/AdditionalServices";
import ShippingCalculator from "../../components/elements/Pricing/ShippingCalculator";

const Pricing = () => {
  const [shippingPrice, setShippingPrice] = useState<number>(0);
  const [itemPrice, setItemPrice] = useState<number | null>(null);

  return (
    <>
      <div className="min-h-full p-10 flex flex-col gap-12">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Kalkulator
        </h1>
        <div>
          <h1>Troškovi isporuke</h1>
          <h5>0.0 – 3.0 kg - 15.00 KM po kilogramu</h5>
          <h5>3.1 – 5.0 kg - 14.00 KM po kilogramu</h5>
          <h5>5.1 kg i više - 13.00 KM po kilogramu</h5>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-10">
          <ShippingCalculator
            setShippingPrice={setShippingPrice}
            setItemPrice={setItemPrice}
          />
          <AdditionalServices
            // shippingPrice={shippingPrice}
            setShippingPrice={setShippingPrice}
            itemPrice={itemPrice}
          />
        </div>
        <div>
          CIJENA DOSTAVE: {shippingPrice ? shippingPrice.toFixed(2) : 0} KM
        </div>
      </div>
    </>
  );
};

export default Pricing;
