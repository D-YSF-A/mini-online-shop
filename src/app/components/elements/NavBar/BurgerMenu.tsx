import { Bars3Icon } from "@heroicons/react/24/outline";

type Props = {
  setMobileMenuOpen: (value: boolean) => void;
};

const BurgerMenu = ({ setMobileMenuOpen }: Props) => (
  <div className="flex lg:hidden">
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-md p-2  text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#db5d3c] focus:ring-offset-2"
      onClick={() => setMobileMenuOpen(true)}
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
);

export default BurgerMenu;
