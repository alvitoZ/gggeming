import Image from "next/image";
import Link from "next/link";
import Links from "../atoms/Links";
function Footer() {
  const links = [
    {
      href: "/",
      title: "Visi Kami",
    },
    {
      href: "/",
      title: "Kedai Kami",
    },
    {
      href: "/",
      title: "Karir",
    },
    {
      href: "/",
      title: "Berita & Informasi",
    },
    {
      href: "/",
      title: "Produk Kami",
    },
    {
      href: "/",
      title: "Cara Order",
    },
    {
      href: "/",
      title: "FAQ'S",
    },
    {
      href: "/",
      image: "/static/svgs/Facebook.svg",
      alt: "Facebook",
    },
    {
      href: "/",
      image: "/static/svgs/Twitter.svg",
      alt: "Twitter",
    },
    {
      href: "/",
      image: "/static/svgs/Instagram.svg",
      alt: "Instagram",
    },
    {
      href: "/",
      image: "/static/svgs/Linkedin.svg",
      alt: "Linkedin",
    },
    {
      href: "/",
      image: "/static/svgs/Youtube.svg",
      alt: "Youtube",
    },
  ];

  return (
    <>
      <footer className="bg-slate-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start pb-8 pl-24">
        <div className="p-5">
          <ul>
            <Image
              src="/images/LOGO_SEHJIRA_(1)_1.png"
              alt="sehjira"
              height={95}
              width={88}
            />
            <p className="w-4/6 pb-4 font-semibold font text-[18px]">
              Konsultan, Advokasi, Pelatihan & Pendidikan Disabilitas Therapist
              Terapi Wicara untuk Disabilitas Pendengaran
            </p>
            <div className="flex gap-3 pl-[3%] flex-wrap pb-5 px-24">
              {links.slice(7, 12).map((e, i) => {
                return (
                  <li
                    key={i}
                    className="pb-2 text-[#1E1E1E]  font-normal hover:text-blue-600 cursor-pointer"
                  >
                    <Links href={e.href} image={e.image} alt={e.alt} />
                  </li>
                );
              })}
            </div>
          </ul>
        </div>

        <div className="flex w-full">
          <div className="p-5 flex flex-wrap w-auto">
            <ul>
              <p className=" pb-8 text-[#843C74] font-bold text-[24px]">
                <Link href={"/"}>Tautan Cepat</Link>
              </p>
              {links.slice(0, 4).map((e, i) => {
                return (
                  <li
                    key={i}
                    className="pb-2 text-[#1E1E1E] font-semibold hover:text-blue-600 cursor-pointer"
                  >
                    <Links href={e.href} title={e.title} />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-1/5"></div>

          <div className="p-5 flex flex-wrap w-auto">
            <ul>
              <p className=" text-[24px] pb-8 text-[#843C74] font-bold">
                <Link href={"/"}>Toko</Link>
              </p>
              {links.slice(4, 7).map((e, i) => {
                return (
                  <li
                    key={i}
                    className="pb-2 text-[#1E1E1E]  font-semibold hover:text-blue-600 cursor-pointer"
                  >
                    <Links href={e.href} title={e.title} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
      <div className="flex flex-col justify-center items-center text-center p-5 tracking-[0.4rem]">
        <hr className="w-[100%] h-[1px] mx-auto bg-[black] border-0 my-8" />
        <p className="text-[#767494]  text-[18px]">
          ?? 2018 - 2023 Sehjira. Hak Cipta All Rights Reserved |{" "}
          <span className="text-[#ADABC3]">Syarat dan Ketentuan | Privasi</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
