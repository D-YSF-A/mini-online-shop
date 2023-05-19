import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <Link href="/" className="-m-1.5">
    <div className="h-[76px] w-[180px] relative top-0">
      <Image
        src="/images/lightLogo.png"
        alt="logo"
        fill
        className="object-contain"
      />
    </div>
  </Link>
);

export default Logo;
