import { useEffect, useState } from "react";

type Service = {
  id: number;
  label: string;
  subLabel: string;
  percentage?: number;
  flatFee?: number;
};

const services: Service[] = [
  { id: 1, label: "Prepakiranje", subLabel: "(besplatno)" },
  {
    id: 2,
    label: "Osiguranje",
    subLabel: "(2.5% od utvrđene vrijednosti robe)",
    percentage: 2.5,
  },
  { id: 3, label: "Fotografija", subLabel: "3 KM po komadu", flatFee: 3 },
  { id: 4, label: "Dodatno pakovanje", subLabel: "5 KM po komadu", flatFee: 5 },
  {
    id: 5,
    label: "Provjera funkcionalnosti",
    subLabel: "10 KM po komadu",
    flatFee: 10,
  },
  { id: 6, label: "Razdvajanje", subLabel: "10 KM po komadu", flatFee: 10 },
];

type Props = {
  setShippingPrice: (value: number | ((prevPrice: number) => number)) => void;
  itemPrice: number | null;
};

const AdditionalServices = ({ setShippingPrice, itemPrice }: Props) => {
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const handleCheckboxChange = (serviceId: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedServices([...selectedServices, serviceId]);
    } else {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    }
  };

  useEffect(() => {
    let totalPrice = 0;
    services.forEach((service) => {
      const isSelected = selectedServices.includes(service.id);
      if (isSelected) {
        let additionalPrice = 0;
        if (service.percentage && itemPrice) {
          additionalPrice += (service.percentage / 100) * itemPrice;
        } else if (service.flatFee) {
          additionalPrice += service.flatFee;
        }
        totalPrice += additionalPrice;
      } else {
        let removedPrice = 0;
        if (service.percentage && itemPrice) {
          removedPrice += (service.percentage / 100) * itemPrice;
        } else if (service.flatFee) {
          removedPrice += service.flatFee;
        }
        totalPrice -= removedPrice;
      }
    });

    setShippingPrice(totalPrice);
  }, [selectedServices, itemPrice, setShippingPrice]);

  useEffect(() => {
    let totalPrice = 0;
    selectedServices.forEach((id) => {
      const service = services.find((s) => s.id === id);
      if (service) {
        let additionalPrice = 0;
        if (service.percentage && itemPrice) {
          additionalPrice += (service.percentage / 100) * itemPrice;
        } else if (service.flatFee) {
          additionalPrice += service.flatFee;
        }
        totalPrice += additionalPrice;
      }
    });

    setShippingPrice((prevPrice: number) => prevPrice - totalPrice);
  }, [selectedServices, itemPrice, setShippingPrice]);

  return (
    <div className="md:w-[50%] flex flex-col gap-3">
      <h1>Dodatne Usluge</h1>
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:items-center"
        >
          <div className="flex gap-2">
            <input
              className="h-4 w-4 rounded border-gray-300  text-[#db5d3c] focus:ring-[#ff6d48]"
              type="checkbox"
              id={`${service.label}-service`}
              checked={selectedServices.includes(service.id)}
              onChange={(e) =>
                handleCheckboxChange(service.id, e.target.checked)
              }
            />
            <label className="text-sm font-medium text-gray-900 dark:text-gray-600">
              {service.label}
            </label>
          </div>
          <h6 className="text-xs italic text-gray-500">{service.subLabel}</h6>
        </div>
      ))}
    </div>
  );
};

export default AdditionalServices;
