import { Banner } from "./Banner";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-auto pb-5 gap-5">
      <Banner
        imgHeight="350px"
        imgSrc="/images/footerImg.png"
        imgAlt="footer image"
      />
      <h1 className="text-center font-bold tracking-tight text-gray-800 text-4xl">
        GET IN TOUCH
      </h1>
      <h6 className="text-sm text-center tracking-tight text-gray-700 font-light">
        500 Terry Francois Street, 6th Floor. San Francisco, CA 94158
      </h6>
      <h6 className="text-sm text-center tracking-tight text-gray-700 font-light">
        info@mysite.com
      </h6>
      <h6 className="text-sm text-center tracking-tight text-gray-700 font-light">
        123-456-7890
      </h6>
    </footer>
  );
};

export default Footer;
