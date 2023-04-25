import Image from "next/image";

interface Props {
  imgHeight: string;
  imgSrc: string;
  imgAlt: string;
}

export const Banner = (bannerProps: Props) => {
  return (
    <div className={`w-full h-[450px] relative`}>
      <Image
        src={bannerProps.imgSrc}
        alt={bannerProps.imgAlt}
        fill
        className="object-cover"
      />
    </div>
  );
};
