import { CustomScreenSizes } from "@/app/libs/helpers/html.helper";
import { shops } from "@/app/libs/options/shops.options";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card } from "../../elements/Card/Card";

const getItemsPerPage = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < CustomScreenSizes.EXTRA_SMALL) {
    return 1;
  } else if (windowWidth < CustomScreenSizes.SMALL) {
    return 2;
  } else if (windowWidth < CustomScreenSizes.MEDIUM) {
    return 3;
  } else if (windowWidth < CustomScreenSizes.LARGE) {
    return 4;
  } else {
    return 5;
  }
};

const ItemsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const itemWidth = 250;
  const containerWidth = itemWidth * itemsPerPage;

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

  const containerTransform = `translateX(-${currentIndex * itemWidth}px)`;

  return (
    <div className="relative flex flex-row gap-2 md:gap-5 transition-transform">
      <div className="pt-[112.5px]">
        {currentIndex > 0 && (
          <button onClick={handleClickPrev}>
            <Image
              src={"/images/rightArrowIcon.png"}
              alt={"product image"}
              width={25}
              height={25}
            />
          </button>
        )}
        {/* <PreviousNextButton
          shouldShow={currentIndex > 0}
          onClick={handleClickPrev}
          imageSrc="/images/rightArrowIcon.png"
          imageAlt="Next image"
        /> */}
      </div>
      <div className="flex overflow-x-hidden">
        <div
          className="flex transition-transform ease-in-out duration-300"
          style={{ transform: containerTransform, width: containerWidth }}
        >
          {shops.map((item) => (
            <div key={item.id} className="w-[250px]">
              <Card name={item.name} category={item.category} url={item.url} />
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[112.5px]">
        {currentIndex < shops.length - itemsPerPage && (
          <button onClick={handleClickNext}>
            <Image
              src={"/images/leftArrowIcon.png"}
              alt={"product image"}
              width={25}
              height={25}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemsCarousel;
