import Image from "next/image";

interface Props {
  name: string;
  url: string;
  category: string;
}

export const Card = (itemProps: Props) => {
  const imageSrc = `/images/shopsLogo/${itemProps.name}-Logo.png`;
  return (
    <div className="flex flex-col gap-3 p-3 group relative">
      <div className="w-[230px] h-[230px] flex items-center overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        <Image
          src={imageSrc}
          alt={`${itemProps.name} Logo`}
          width={250}
          height={250}
        />
      </div>
      <div>
        <h3 className="text-sm text-gray-700">
          <a href={itemProps.url} target="_blank">
            <span aria-hidden="true" className="absolute inset-0" />
            {itemProps.name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{itemProps.category}</p>
      </div>
    </div>
  );
};
