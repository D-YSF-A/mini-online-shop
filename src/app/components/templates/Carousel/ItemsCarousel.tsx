import { shops } from "@/app/libs/options/shops.options";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card } from "../../elements/Card/Card";

const ItemsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  const itemWidth = 250;
  const containerWidth = itemWidth * itemsPerPage;

  const getItemsPerPage = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 400) {
      // setIsSmallScreen(true);
    }
    if (windowWidth < 660) {
      // setIsSmallScreen(false);
      return 1;
    } else if (windowWidth < 1050) {
      // setIsSmallScreen(false);
      return 2;
    } else if (windowWidth < 1250) {
      // setIsSmallScreen(false);
      return 3;
    } else {
      // setIsSmallScreen(false);
      return 4;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    window.addEventListener("resize", handleResize);
    setItemsPerPage(getItemsPerPage());
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickNext = () => {
    if (currentIndex < shops.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // const arrowDimension = isSmallScreen ? 30 : 50;
  const containerTransform = `translateX(-${currentIndex * itemWidth}px)`;

  return (
    <div className="relative flex flex-row gap-5 transition-transform">
      <div className="w-[50px] pt-[103px]">
        {currentIndex > 0 && (
          <button className="" onClick={handleClickPrev}>
            <Image
              src={"/images/rightArrowIcon.png"}
              alt={"product image"}
              width={50}
              height={50}
            />
          </button>
        )}
      </div>
      <div className="flex overflow-x-hidden">
        <div
          className="flex transition-transform ease-in-out duration-300"
          style={{ transform: containerTransform, width: containerWidth }}
        >
          {shops.map((item) => (
            <div key={item.id} className="w-[250px]">
              <Card
                name={item.name}
                image={item.image}
                category={item.category}
                url={item.url}
                joinUrl={item.joinUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[50px] pt-[103px]">
        {currentIndex < shops.length - itemsPerPage && (
          <button className="" onClick={handleClickNext}>
            <Image
              src={"/images/leftArrowIcon.png"}
              alt={"product image"}
              width={50}
              height={50}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemsCarousel;
