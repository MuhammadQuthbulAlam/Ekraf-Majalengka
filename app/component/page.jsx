import React from "react";
import Image from "next/image";
import Img from "../../public/Assets/images/MCC2.jpg";

const page = () => {
  return (
    <div className="homepage pb-10" id="home">
      <div className="container mx-auto px-9 xl:px-40 lg:px-20">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/8 mb-7 text-justify">
              Majalengka Creative Center merupakan bentuk stimulasi yang
              diberikan kepada pelaku kreatif di Majalengka, terutama kepada
              generasi muda guna menunjang industri kreatif dalam meningkatkan
              ekonomi.
            </p>
            <a
              href="/Komite"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-5 text-white shadow rounded-sm hover:scale-125"
            >
              Tentang Kami
            </a>
          </div>
          <div className="box">
            <Image
              src={Img}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto  md:m-0 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
