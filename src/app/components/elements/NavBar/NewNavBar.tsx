"use client";

import { navBarOptions } from "@/app/libs/options/navbar.options";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

export const NewNavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-10 h-[76px] pt-1 border-b-[1px]">
      <nav
        className="mx-auto flex items-center justify-between lg:pr-10 sticky top-0 z-10"
        aria-label="Global"
      >
        <a href="#" className="-m-1.5">
          <div className="h-[76px] w-[180px] relative top-0">
            <Image
              src={"/images/lightLogo.png"}
              alt={"logo"}
              fill
              className="object-cover"
            />
          </div>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navBarOptions.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white xy-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between border-b-[1px]">
            <a href="#">
              <div className="h-[60px] w-[120px] relative top-0">
                <Image
                  src={"/images/lightLogo.png"}
                  alt={"logo"}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <button
              type="button"
              className="rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* <Disclosure>
            <div className="mt-3 space-y-1">
              {navBarOptions.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure> */}
          <div className="mt-6 flow-root">
            <div className="divide-y divide-gray-500/10">
              <div>
                {navBarOptions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-10 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
