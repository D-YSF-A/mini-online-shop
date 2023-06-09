import { Banner } from "./Banner";

export const HowToBuy = () => {
  return (
    <div className="flex md:flex-row flex-col max-h-[450px]">
      <div className="flex flex-col justify-center bg-[#ffe2dc] md:w-[50%] text-center p-12 sm:p-16 lg:p-24 xl:p-32">
        <h1 className="font-bold tracking-tight text-gray-800 text-4xl md:pt-12 lg:pt-0">
          KAKO KUPITI?
        </h1>
        <h6 className="tracking-tight text-gray-700 pt-10 pb-12">
          Ovdje ćemo pokazati kako kupovati na platformi. Izradit ćemo video s
          objašnjenjem kako bi kupci mogli kliknuti na njega i gledati proces
          kupovine i otpreme korak po korak.
        </h6>
        <h6>Saznajte Više</h6>
      </div>
      <div className="hidden md:flex md:w-[50%] relative">
        <Banner
          imgHeight="400px"
          imgSrc="/images/howToBuyImg3.jpg"
          imgAlt="how to buy image"
        />
      </div>
    </div>
  );
};
