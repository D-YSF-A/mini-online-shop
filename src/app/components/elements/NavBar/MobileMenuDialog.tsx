import { navBarOptions } from "@/app/libs/options/navbar.options";
import { Dialog, Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MobileMenuDialog = ({ mobileMenuOpen, setMobileMenuOpen }: Props) => {
  const pathName = usePathname();
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white xy-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center pr-2.5 justify-between border-b-[1px]">
          <a href="#">
            <div className="h-[76px] w-[180px] relative top-0">
              <Image
                src="/images/lightLogo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2  text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#db5d3c] focus:ring-offset-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          <div className="space-y-1 pb-3 pt-2">
            {navBarOptions.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.href === pathName
                    ? "border-[#eb795c] bg-[#faefec] text-[#db5d3c]"
                    : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileMenuDialog;
