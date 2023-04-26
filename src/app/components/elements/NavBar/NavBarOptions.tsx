import { navBarOptions } from "@/app/libs/options/navbar.options";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavBarOptions = () => (
  <div className="hidden h-16 lg:flex sm:gap-8">
    {navBarOptions.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className={classNames(
          item.current
            ? "border-[#db5d3c] text-gray-900"
            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
          "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
        )}
        aria-current={item.current ? "page" : undefined}
      >
        {item.name}
      </a>
    ))}
  </div>
);

export default NavBarOptions;
