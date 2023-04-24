import Image from "next/image";

export const HowToBuy = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="bg-gray-100 md:w-[50%] text-center p-12 sm:p-16 lg:p-24 xl:p-32">
        <h1 className="text-gray-800 font-serif text-4xl md:pt-12 lg:pt-0">
          HOW TO BUY?
        </h1>
        <h6 className="font-serif text-gray-700 pt-10 pb-12">
          Here we will show how to buy from the platform. We will create an
          explainer video so the customers can click on it and watch the
          shopping and shipment process step by step.
        </h6>
        <h6>Learn More</h6>
      </div>
      <div className="md:w-[50%] h-[500px] relative">
        <Image
          src={"/images/howToBuyImg.jpeg"}
          alt="home page image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};
