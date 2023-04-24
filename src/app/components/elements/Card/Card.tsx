import Image from "next/image";

interface Props {
  name: string;
  image: string;
  url: string;
  joinUrl: string;
  category: string;
}

export const Card = (itemProps: Props) => {
  const imageSrc = `/images/shopsLogo/${itemProps.name}-Logo.png`;
  return (
    <a href={itemProps.url} target="_blank">
      <div className="flex flex-col gap-3 p-3">
        <div className="w-[230px] h-[230px] flex items-center">
          <Image
            src={imageSrc}
            alt={itemProps.name + " Logo"}
            width={250}
            height={250}
          />
        </div>
        <div>
          <p className="font-serif text-gray-500 italic">{itemProps.name}</p>
          <p className="font-serif text-xs text-gray-500 italic">
            {itemProps.category}
          </p>
        </div>
      </div>
    </a>
  );
};
