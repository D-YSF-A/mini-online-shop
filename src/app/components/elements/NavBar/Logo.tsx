import Image from "next/image";

const Logo = () => (
  <a href="#" className="-m-1.5">
    <div className="h-[76px] w-[180px] relative top-0">
      <Image
        src="/images/lightLogo.png"
        alt="logo"
        fill
        className="object-contain"
      />
    </div>
  </a>
);

export default Logo;
