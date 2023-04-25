"use client";

import ItemsCarousel from "../templates/Carousel/ItemsCarousel";

export const ProductList = () => {
  return (
    <div className="flex flex-col items-center gap-6 sm:px-12">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Kupi u Turskoj
      </h1>
      <ItemsCarousel />
    </div>
  );
};
