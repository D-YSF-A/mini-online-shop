"use client";

import ItemsCarousel from "../templates/Carousel/ItemsCarousel";

export const ProductList = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-12 sm:px-12">
      <h1 className="font-serif text-center text-3xl sm:text-5xl">
        Kupi u Turskoj
      </h1>
      <ItemsCarousel />
    </div>
  );
};
