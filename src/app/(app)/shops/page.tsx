'use client';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { ShopsCatagoreis } from '../../libs/helpers/catagories.helpers';
import { shops } from '../../libs/options/shops.options';

const description =
  'Moze ovdje ici neki tekst, ili opis o radnji, a moze bez icega!!';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const useFilteredShops = (): [
  typeof shops,
  (selectedCategories: ShopsCatagoreis[]) => void,
] => {
  const [filteredShops, setFilteredShops] = useState(shops);

  const handleCategoryChange = (selectedCategories: ShopsCatagoreis[]) => {
    let filtered = shops;
    if (selectedCategories.length > 0) {
      filtered = shops.filter((shop) =>
        selectedCategories.includes(shop.category),
      );
    }
    setFilteredShops(filtered);
  };

  return [filteredShops, handleCategoryChange];
};

const Shops = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState<
    { value: ShopsCatagoreis; label: string; checked: boolean }[]
  >(
    Object.values(ShopsCatagoreis).map((category) => ({
      value: category,
      label: category,
      checked: false,
    })),
  );

  const [filteredShops, handleCategoryChange] = useFilteredShops();

  const selectedOptions = categoryOptions
    .filter((option) => option.checked)
    .map((option) => option.value);

  useEffect(() => {
    handleCategoryChange(selectedOptions);
  }, [handleCategoryChange, selectedOptions]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setCategoryOptions(
      categoryOptions.map((option) =>
        option.value === value ? { ...option, checked } : option,
      ),
    );
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filteri
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filter */}
                  <form className="mt-4">
                    <Disclosure
                      as="div"
                      className="border-t border-gray-200 pb-4 pt-4"
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                              <span className="text-sm font-medium text-gray-900">
                                Kategorije
                              </span>
                              <span className="ml-6 flex h-7 items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-5 w-5 transform',
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className="px-4 pb-2 pt-4">
                            <div className="space-y-6">
                              {categoryOptions.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`${optionIdx}-mobile`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-[#db5d3c] focus:ring-[#ff6d48]"
                                    checked={option.checked}
                                    onChange={handleCheckboxChange}
                                  />
                                  <label
                                    htmlFor={`${optionIdx}-mobile`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Naši Partneri
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Otkrijte našu mrežu provjerenih trgovina
            </p>
          </div>

          <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filteri</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filteri
                </span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  <div
                  // className={sectionIdx === 0 ? null : "pt-10"}
                  >
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        Kategorije
                      </legend>
                      <div className="space-y-3 pt-6">
                        {categoryOptions.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`${optionIdx}`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300  text-[#db5d3c] focus:ring-[#ff6d48]"
                              checked={option.checked}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              htmlFor={`${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </form>
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {filteredShops.map((shop) => (
                  <div
                    key={shop.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >
                    <div className="aspect-[4/3] bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-86">
                      <Image
                        className="h-full w-full object-contain object-center sm:h-full sm:w-full"
                        src={`/images/shopsLogo/${shop.name}-Logo.png`}
                        alt={`${shop.name} Logo`}
                        width={250}
                        height={250}
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-4 p-4 max-h-[152px]">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href={shop.url} target="_blank">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {shop.name}
                        </a>
                      </h3>
                      <p className="text-sm text-gray-500">{description}</p>
                      <div className="flex flex-1 flex-row justify-between">
                        <p className="text-sm italic text-gray-500">
                          {shop.category}
                        </p>
                        {/* <p className="text-sm font-medium text-gray-900">
                          {shop.joinUrl && (
                            <a href={shop.joinUrl}>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              Uclani se
                            </a>
                          )}
                        </p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shops;
