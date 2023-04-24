import { Banner } from "./Banner";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-auto pt-4 gap-5">
      <h1 className="text-center font-serif text-4xl">GET IN TOUCH</h1>
      <h6 className="text-sm text-center font-light">
        500 Terry Francois Street, 6th Floor. San Francisco, CA 94158
      </h6>
      <h6 className="text-sm text-center font-light">info@mysite.com</h6>
      <h6 className="text-sm text-center font-light">123-456-7890</h6>
      <Banner
        imgHeight="350px"
        imgSrc="/images/footerImg.png"
        imgAlt="footer image"
      />
    </footer>
  );
};

export default Footer;
