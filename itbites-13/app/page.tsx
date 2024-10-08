import NavBar from "../components/NavBar";
import FoodCard from "@/components/FoodCard";
import FoodCardSmall from "@/components/FoodCardSmall";
import FoodCardSmall2 from "@/components/FoodCardSmall2";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>ITBites</title>
        <link rel="icon" href="/itbites b logo.ico" />
      </Head>

      <div id="Beranda" className="bg-itbites bg-cover min-h-screen w-full">
        <NavBar />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start px-4 mt-[200px] ml-[40px]">
            <h3 className="font-extrabold text-4xl md:text-7xl text-[#303030] mt-24 text-center md:text-left">
              Telusuri Makanan yang ada di kantin ITB!
            </h3>
            <Link
              href="/KantinPage"
              className="mt-10 md:mt-16 bg-[#fe6601] w-[60%] md:w-[148px] h-[55px] rounded-[50px] shadow-2xl font-extrabold text-xl text-white flex items-center justify-center"
            >
              Explore
            </Link>
          </div>

          <div className="flex flex-row items-center md:items-start gap-4 px-4 mt-[200px]">
            <div className="mt-10 mr-6"><FoodCardSmall /></div>
            <FoodCard />
            <div className="mt-10 ml-6"><FoodCardSmall2 /></div>
          </div>
        </div>
      </div>
    </>
  );
}
