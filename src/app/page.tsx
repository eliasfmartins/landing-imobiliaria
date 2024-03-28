import Link from "next/link";
import { Header } from "./components/header/index";
import { playfair } from "./layout";
import { roboto } from "./layout";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div
        className="flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #0001, #000), url(/tower.jpg)",
          filter: "brightness(150%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 80px)",
        }}
      >
        <div className="flex flex-col gap-y-6">
          <h2
            className={`${playfair.className} text-7xl font-[700] text-white tracking-widest`}
            style={{ textShadow: "5px 1px 4px rgba(0, 0, 0, 0.5)" }}
          >
            MARTINS & SILVA
          </h2>
          <h3
            className={`${roboto.className} text-4xl font-[200] text-white tracking-widest`}
            style={{ textShadow: "5px 1px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Escritório Imobiliário
          </h3>
          <div className="w-[300px] bg-orange-400 h-1 mx-auto rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="min-h-[35vh] xl:flex max-w-[1200px] mx-auto mt-20">
        <div className="flex flex-col space-y-10  mt-7  p-4  h-fit xl:items-start items-center">
          <h2 className={`${playfair.className} w-96 text-3xl font-[700]`}>
            Um Lançamento Com Excelência E Qualidade
          </h2>
          <p className="font-extralight text-md">
            Oportunidade única para quem tem bom gosto e quer morar bem aqui em Valparaiso
          </p>
          <Link
            href=""
            className="border-2 border-orange-200 w-fit px-8 py-3 font-[700] text-orange-200 hover:bg-orange-300 hover:text-white transition-all ease-in-out  rounded"
          >
            Plantas
          </Link>
        </div>
        <img
          src={"/temp.png"}
          className=" xl:mt-[-205px] z-10 bg-transparent flex flex-1"
        />
      </div>
    </main>
  );
}
