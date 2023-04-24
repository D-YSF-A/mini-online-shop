import Link from "next/link";

interface ItemProps {
  link: string;
  text: string;
}

interface NavBarProps {
  tabs: ItemProps[];
}

export const NavBar = ({ tabs }: NavBarProps) => {
  const NavBarItem = ({ link, text }: ItemProps) => (
    <Link href={link} className="hover:text-gray-500 text-sm font-light">
      {text}
    </Link>
  );

  return (
    <nav className="flex justify-center bg-gray-100 w-full sticky top-0 z-10">
      <ul className="gap-4 flex">
        {tabs.map((tab) => (
          <li key={tab.link} className="py-2 hidden sm:flex">
            <NavBarItem text={tab.text} link={tab.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
