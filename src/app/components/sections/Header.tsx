"use client";

import { useState } from "react";
import BurgerMenu from "../elements/NavBar/BurgerMenu";
import Logo from "../elements/NavBar/Logo";
import MobileMenuDialog from "../elements/NavBar/MobileMenuDialog";
import NavBarOptions from "../elements/NavBar/NavBarOptions";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-10 h-[76px] pt-1 border-b-[1px]">
      <nav
        className="mx-auto flex items-center justify-between pr-2.5 lg:pr-6 "
        aria-label="Global"
      >
        <Logo />
        <BurgerMenu setMobileMenuOpen={setMobileMenuOpen} />
        <NavBarOptions />
      </nav>
      <MobileMenuDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
