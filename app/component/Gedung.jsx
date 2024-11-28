"use client";
import Image from "next/image";
import AboutImage from "../../public/Assets/images/MCC3.jpg";
const Gedung = () => {
  return (
    <>
      {/*About*/}
      <div
        className="about mx-10 grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-10 pt-5"
        id="about"
      >
        <div className="box mx-10 md:order-1 order-2">
          <Image
            src={AboutImage}
            alt="Aboout Image"
            className="lg:w-[500px] w-[400px] md:m-0 mx-auto rounded-lg"
          />
        </div>
        <div className="pt-20 box md:order-2 order-1">
          <h1 className="lg:text-5xl/tight text-2xl font-medium mb-7">
            Gedung Majalengka
            <span className="font-bold text-sky-400"> Creative Center</span>
          </h1>
          <p className="text-base/loose">
            <span className="font-bold">Gedung Majalengka Creative Center</span>{" "}
            telah berdiri di Kabupaten Majalengka. Bangunan yang ditujukan
            sebagai ruang industri kreatif tersebut diresmikan pada 11 Januari
            2023. Dalam proses peresmian, hadir Menteri Koperasi dan Usaha Kecil
            Menengah Teten Masduki, Wakil Gubernur Jabar Uu Ruzhanul Ulum,
            Bupati Majalengka Karna Sobahi, serta sejumlah tokoh Forkopimda.
            Kegiatan peresmian tersebut juga dihadiri Kepala Dinas Pariwisata
            dan Kebudayaan Provinsi Jawa Barat Benny Bachtiar yang diwakili
            Kepala Bidang Industri Pariwisata Rispiaga. Menurut Menteri Koperasi
            UMKM, keberadaan Gedung Creative Center Majalengka mejadi sebuah
            solusi dari ancaman resesi ekonomi. Masyarakat khususnya generasi
            muda bisa memanfaatkan Gedung Creative Center ini sebagai sarana
            pengembangan industri kreatif serta pemasaran produk-produk lokal.
          </p>
        </div>
      </div>
    </>
  );
};

export default Gedung;
