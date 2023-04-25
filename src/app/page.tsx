import { Banner } from "./components/sections/Banner";
import { HowToBuy } from "./components/sections/HowToBuy";
import { IntroVideo } from "./components/sections/IntroVideo";
import { ProductList } from "./components/sections/ProductList";

const Home = () => {
  return (
    <main className="grid gap-10 md:gap-24">
      <Banner
        imgHeight="300px"
        imgSrc="/images/homePageImg.png"
        imgAlt="home page image"
      />
      <ProductList />
      <HowToBuy />
      <IntroVideo />
    </main>
  );
};

export default Home;
