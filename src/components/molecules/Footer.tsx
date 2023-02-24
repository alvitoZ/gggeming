import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <>
      <footer className="bg-slate-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start pb-8">
        <div className="p-5">
          <ul>
            <Image
              src="/images/LOGO_SEHJIRA_(1)_1.png"
              alt="sehjira"
              height={95}
              width={88}
            />
            <p className="w-4/6 pb-4 font-['DM Sans', sans-serif] font-normal font text-[18px]">
              Konsultan, Advokasi, Pelatihan & Pendidikan Disabilitas Therapist
              Terapi Wicara untuk Disabilitas Pendengaran
            </p>
            <div className="flex gap-3 pl-[3%] flex-wrap pb-5 px-20">
              <Link href={"/"}>
                <Image
                  src="/static/svgs/Facebook.svg"
                  alt="facebook"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/static/svgs/Twitter.svg"
                  alt="facebook"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/static/svgs/Instagram.svg"
                  alt="instagram"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/static/svgs/Linkedin.svg"
                  alt="linkedin"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/static/svgs/Youtube.svg"
                  alt="youtube"
                  width={36}
                  height={36}
                />
              </Link>
              {/* <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" /> */}
            </div>
          </ul>
        </div>

        <div className="flex w-full">
          <div className="p-5 flex flex-wrap w-auto">
            <ul>
              <p className="text-gray-800 text-2xl pb-8 font-['DM Sans', sans-serif] text-[#843C74] font-semibold">
                <Link href={"/"}>Tautan Cepat</Link>
              </p>
              <li className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                <Link href={"/"}>Visi Kami</Link>
              </li>
              <li className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                <Link href={"/"}>Kedai Kami</Link>
              </li>
              <li className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                <Link href={"/"}> Karir</Link>
              </li>
              <li className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                <Link href={"/"}>Berita & Informasi</Link>
              </li>
            </ul>
          </div>

          <div className="w-1/5"></div>

          <div className="p-5 flex flex-wrap w-auto">
            <ul>
              <p className="text-gray-800 text-2xl pb-8 font-['DM Sans', sans-serif] text-[#843C74] font-semibold">
                <Link href={"/"}>Toko</Link>
              </p>
              <li className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                <Link href={"/"}>Produk Kami</Link>
              </li>
              <li className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                <Link href={"/"}>Cara Order</Link>
              </li>
              <li className="pb-2 font-['DM Sans', sans-serif] text-[#1E1E1E] hover:text-blue-600 cursor-pointer">
                <Link href={"/"}>FAQ’s</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="flex flex-col justify-center items-center text-center p-5">
        <hr className="w-[100%] h-[1px] mx-auto bg-[black] border-0 my-8" />
        <p className="text-[#767494] font-['DM Sans', sans-serif] text-[18px]">
          © 2018 - 2023 Sehjira. Hak Cipta All Rights Reserved |{" "}
          <span className="text-[#ADABC3]">Syarat dan Ketentuan | Privasi</span>
        </p>
      </div>
    </>
  );
}

export default Footer;

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white p-6">
//       Copyright &copy; 2023 by <a href="htpps://saltacademy.id">Salt Academy</a>
//     </footer>
//   );
// };

// export default Footer;
