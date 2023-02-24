// import Link from "next/link";
// import Image from "next/image";
// import Button from "../atoms/Button";

import { height } from "@mui/system";
import Image from "next/image";

// const PrimaryNavigation = () => {
//   const userData = {
//     name: "Jane Doe",
//     email: "envkt@example.com",
//     password: "password",
//     role: "admin",
//   };

//   return (
//     <nav classNameNameNameName="flex items-center justify-between flex-wrap bg-[#FFFFFF] p-3">
//       <div classNameNameNameName="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
//         <ul classNameNameNameName="lg:flex-grow pl-20 text-[#843C74] hover:text-[#413c84]">
//           <Link classNameNameNameName="hyperlink" href="/">
//             Visi Kami
//           </Link>
//           <Link classNameNameNameName="hyperlink" href="/about">
//             Produk Kami
//           </Link>
//         </ul>
//       </div>
//       <div classNameNameNameName="flex items-center flex-shrink-0 mr-6">
//         <span classNameNameNameName="font-semibold text-xl tracking-tight">
//           <Image
//             // loader={myLoader}
//             src="/images/LOGO_SEHJIRA_(1)_1.png"
//             alt="image"
//             width={81}
//             height={87}
//           />
//         </span>
//       </div>
//       <div classNameNameNameName="w-full block flex-grow lg:w-auto lg:flex lg:items-center">
//         <ul classNameNameNameName="flex lg:flex-grow justify-end pr-16 text-[#843C74] hover:text-[#413c84]">
//           <Link classNameNameNameName="hyperlink" href="/">
//             Kedai Kami
//           </Link>
//           <Link classNameNameNameName="hyperlink" href="/about">
//             Tentang Kami
//           </Link>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default PrimaryNavigation;

import Link from "next/link";
import { useState } from "react";

const PrimaryNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  return (
    <>
      <nav
        className="
          w-full
          py-4
          md:py-0
          px-16
          text-lg text-gray-700
          bg-white
        "
      >
        <div className="flex justify-between">
          <div>
            <Image
              className={`cursor-pointer md:hidden block`}
              src="/images/LOGO_SEHJIRA_(1)_1.png"
              height={87}
              width={81}
              alt="sehijra"
            />
          </div>
          <p
            className={`h-6 w-6 cursor-pointer md:hidden block`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            kucing menggigil
          </p>
        </div>

        <div
          className={`${
            isMenuOpen ? "hidden" : "block"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <div
            className="
              pt-4
              md:flex
              md:justify-between
              md:items-center
              md:pt-0
              md:w-full
              pb-4
              "
          >
            <div className="md:flex md:flex-row md:gap-10">
              <p className="text-[#843C74] font-bold font-['DM Sans', sans-serif]">
                Beranda
              </p>
              <p className="text-[#843C74] font-bold font-['DM Sans', sans-serif]">
                Tentang Kami
              </p>
            </div>
            <div>
              <Image
                src="/images/LOGO_SEHJIRA_(1)_1.png"
                height={87}
                width={81}
                alt="sehijra"
              />
            </div>
            <div className="md:flex md:flex-row md:gap-10">
              <p className="text-[#843C74] font-bold font-['DM Sans', sans-serif]">
                Hubungi Kami
              </p>
              <p className="text-[#843C74] font-bold font-['DM Sans', sans-serif]">
                Program Kami
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default PrimaryNavigation;
