import Image from 'next/image';

const Logo = () => {
   return (
      <Image
         className="w-14 sm:w-16 lg:w-20 h-auto"
         src="/logo.png"
         alt="Logo"
         width={232}
         height={81}
         priority
      />
   );
};

export default Logo;
