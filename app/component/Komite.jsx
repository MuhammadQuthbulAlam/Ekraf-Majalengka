"use client";
import Image from "next/image";
import {
  FaGamepad,
  FaHandScissors,
  FaPaintBrush,
  FaBoxOpen,
} from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { GiTravelDress } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { FaPhotoFilm } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { GiPencilBrush } from "react-icons/gi";
import { MdLiveTv } from "react-icons/md";
import { MdOutlineArchitecture } from "react-icons/md";
import { HiMiniTv } from "react-icons/hi2";
import { PiGuitarThin } from "react-icons/pi";
import { MdOutlineAppRegistration } from "react-icons/md";
import { MdOutlinePublish } from "react-icons/md";

import komiteEkraf from "../../public/Assets/images/komite-ekraf.png";

const Komite = () => {
  return (
    <>
      {/* SUbsektor Ekraf*/}
      <Image
        src={komiteEkraf}
        className="w-52 mx-auto mt-5 pt-32"
        alt="komite ekraf"
      />
      <h2 className="text-2xl text-center font-medium mb-4 pt-10">
        17 Subsektor
        <span className="text-sky-400 font-bold"> Ekonomi Kreatif</span>
      </h2>
      <div className="container flex mx-10 pb-5 pt-2" id="Ekraf">
        <div className="box rounded-lg flex flex-row gap-6 overflow-x-auto justify-between pt-5 pb-5 px-5">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <FaGamepad className="ri-gamepad-line flex justify-center text-2xl text-white"></FaGamepad>
            </div>
            <p className="text-center text-sm pt-3 font-medium">
              Game Developer
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <FaHandScissors className="ri-scissors-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">Kriya</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <HiHome className="ri-home-office-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">
              Desain Interior
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <IoMdMusicalNotes className="ri-music-2-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">Musik</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <FaPaintBrush className="ri-brush-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">Seni Rupa</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <FaBoxOpen className="ri-dropbox-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">
              Desain Produk
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <GiTravelDress className="ri-handbag-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">Fashion</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <MdFastfood className="ri-bowl-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">Kuliner</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <FaPhotoFilm className="ri-scissors-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">
              Film, Animasi & Video
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <FaCameraRetro className="ri-scissors-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">Fotografi</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <GiPencilBrush className="ri-scissors-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">
              Desain Komunikasi Visual
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <MdLiveTv className="ri-scissors-line flex justify-center text-2xl text-white" />
            </div>
            <p className="text-center text-sm pt-3 font-medium">
              Televisi & Radio
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <MdOutlineArchitecture className="ri-scissors-line flex justify-center text-2xl text-white"></MdOutlineArchitecture>
            </div>
            <p className="text-center text-sm pt-3 font-medium">Arsitektur</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <HiMiniTv className="ri-scissors-line flex justify-center text-2xl text-white"></HiMiniTv>
            </div>
            <p className="text-center text-sm pt-3 font-medium">Periklanan</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <PiGuitarThin className="ri-scissors-line flex justify-center text-2xl text-white"></PiGuitarThin>
            </div>
            <p className="text-center text-sm pt-3 font-medium">
              Seni Pertunjukan
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <MdOutlinePublish className="ri-scissors-line flex justify-center text-2xl text-white"></MdOutlinePublish>
            </div>
            <p className="text-center text-sm pt-3 font-medium">Penerbitan</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-sky-400 px-4 py-3 items-center hover:bg-sky-600 md:text-1xl sm:text-1xl hover:scale-110">
              <MdOutlineAppRegistration className="ri-scissors-line flex justify-center text-2xl text-white"></MdOutlineAppRegistration>
            </div>
            <p className="text-center text-sm pt-3 font-medium">Aplikasi</p>
          </div>
          {/* Add more subsector items here */}
        </div>
      </div>

      {/*Tentang Ekraf*/}
      <div className="pt-28" id="organisasi">
        <h1 className="text-center lg:text-2xl/tight text-2xl font-medium mb-7">
          Komite Ekonomi <span className="font-bold text-sky-400">Kreatif</span>
        </h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
          <div className="box pt-5">
            <h1
              className="text-left lg:text-2xl/tight text-2xl font-medium mb-3 ml-10"
              id="Tentang-Ekraf"
            >
              Tentang Komite
              <span className="font-bold text-sky-400"> Ekraf</span>
            </h1>
            <div className="text-left mx-10 bg-white border-2 rounded-lg w-auto h-auto">
              <p className="text-base px-2">
                Komite pengembangan ekonomi kreatif majalengka adalah lembaga
                mitra pemerintahan dalam penyusunan kegiatan pengembangan,
                mengarahkan serta mengawal pelaksanaan program aksi pengembangan
                ekonomi kreatif di kabupaten majalengka sesuai dengan keputusan
                bupati majalengka nomor eka.02.01/kep.513-bapedalitbang/2023.
              </p>
            </div>
          </div>
        </div>
        {/*Visi & Misi*/}
        <div className="box pt-5" id="visimisi">
          <h1 className="text-left ml-10 lg:text-2xl/tight text-2xl font-medium mb-7">
            Visi & Misi <span className="font-bold text-sky-400">Ekraf</span>
          </h1>
          <h3 className="pt-1 ml-10 text-2xl font-medium text-sky-400">Visi</h3>
          <div className="text-left mx-10 bg-white border-2 rounded-lg w-auto h-auto items-center">
            <p className="text-base px-2 text-wrap">
              Terwujudnya ekonomi kreatif sebagai sektor potensial unggulan yang
              mendukung pertumbuhan ekonomi di kabupaten majalengka.
            </p>
          </div>
          <h3 className="pt-5 ml-10 text-2xl font-medium text-sky-400">Misi</h3>
          <div className="text-left mx-10 bg-white border-2 rounded-lg w-auto h-auto items-center">
            <p className="text-base px-2 text-wrap">
              <span className="font-bold">1.</span> Mengoptimalisasi aktivasi
              gedung majalengka creative center sebagai ruang edukasi kreasi dan
              ekspresi bagi para pelaku ekonomi kreatif di kabupaten majalengka
              <p>
                <span className="font-bold">2.</span> Mendorong pertumbuhan dan
                perkembangan ekosistem ekonomi kreatif di kabupaten majalengka
              </p>
              <p>
                <span className="font-bold">3.</span> Mendorong pemerintah kab
                majalengka dalam menerbitkan peraturan daerah tentang ekonomi
                kreatif sebagai payung hukum bagi tumbuh kembangangnya ekosistem
                ekonomi kreatif di kabupaten majalengka
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Komite;
