// import { navBarOptions } from "@/app/libs/options/navbar.options";
import { NewNavBar } from "../elements/NavBar/NewNavBar";
// import Image from "next/image";
// import { NavBar } from "../elements/NavBar/NavBar";

const Header = () => {
  return (
    <>
      {/* <header className="flex flex-col items-center bg-white shadow-sm">
        <div className="h-[150px] w-full relative top-0">
          <Image
            src={"/images/lightLogo.png"}
            alt={"logo"}
            fill
            className="object-contain"
          />
        </div>
      </header> */}
      {/* <NavBar tabs={navBarOptions} /> */}
      <NewNavBar />
    </>
  );
};

export default Header;
