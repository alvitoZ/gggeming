import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../atoms/Button";
import Image from "next/image";
import Link from "next/link";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};
console.log({ divStyle });

const slideImages = [
  {
    url: "https://scontent.fkno9-2.fna.fbcdn.net/v/t39.30808-6/333055508_746442010215487_7364225719579064218_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHOrubzhc17lzHBM2lRP1W8v3QckanTRrG_dByRqdNGsT_EisB395OCI_xqEMb2KXeighMjg_Jd3VhBjl0iSM9E&_nc_ohc=zOXxu64sSeQAX906HVB&_nc_zt=23&_nc_ht=scontent.fkno9-2.fna&oh=00_AfC0qJsw9n3oEp6lIM9oKyt5HfmqSh9y_t5UqUIXPyNWoQ&oe=63FCC20C",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "https://scontent.fkno9-1.fna.fbcdn.net/v/t39.30808-6/333274767_525855669671647_6944832944197141276_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF8BkXJRSlP0ydLin5XTDenLBSW09vVA0wsFJbT29UDTDiZXIW58U2owhV87K54IpriySOETdLnEjivaq1fdt9O&_nc_ohc=JOOTXpcH904AX_Sn4ih&_nc_zt=23&_nc_ht=scontent.fkno9-1.fna&oh=00_AfDNu3Q7TvRvRbr9fTU0UKpW4E1eJ7uw-a4HtwQ7TyY1Og&oe=63FD1D4C",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "https://scontent.fkno9-2.fna.fbcdn.net/v/t39.30808-6/333044338_2294195450787534_7768345007158736080_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEX-RrBoWaf7IyZWuI8zQ-kmzTXKI1FNYSbNNcojUU1hCXa39Y_3Z_6Ph47uzkDR1xS665VFwgzWWn69ptPJ1G6&_nc_ohc=_SilTlsyqmkAX9i42CL&tn=Eu9HhMbDz0kldCgg&_nc_zt=23&_nc_ht=scontent.fkno9-2.fna&oh=00_AfDoWi5ZDaIYKREOjX10XW5PjCO-rdUS1CpymNRyBeFY9Q&oe=63FD9E80",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
];

const ImageHome = () => {
  return (
    <div className="slide-container">
      <Slide duration={3000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="flex flex-col  "
              style={{
                ...divStyle,
                backgroundImage: `url(${"/images/s.jpg"})`,
              }}
            >
              <div className=" flex flex-col justify-center absolute mt-48">
                <Link href="/">
                  <Image
                    src="/static/image/Facebook2.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/static/image/Twitter2.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/static/image/Instagram2.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/static/image/LinkedIn2.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/static/image/YouTube2.png"
                    alt="image"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div>
                <h1 className=" text-5xl text-white relative ml-20 mt-60 w-1/5">
                  {" "}
                  {slideImage.caption}{" "}
                </h1>
                <p className=" mt-5 w-2/6 text-white ml-20">
                  {slideImage.desc}
                </p>
              </div>
              <div className="ml-20 bg-white w-72 rounded-full mt-5 h-14 flex    ">
                <Button style="px-[4%] ml-5  " title="PELAJARI LEBIH LANJUT" />
                <Image
                  src="/static/image/Arrow_Right.png"
                  alt="image"
                  width={30}
                  height={-20}
                />
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageHome;
