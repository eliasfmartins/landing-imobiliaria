import Link from "next/link";
import { Header } from "./components/Header/index";
import { playfair } from "./fonts";
import { roboto } from "./fonts";
import { Footer } from "./components/Footer";

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
          <div className="w-[300px] bg-yellow-600 h-1 mx-auto rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="min-h-[35vh] xl:flex max-w-[1200px] mx-auto mt-20">
        <div className="flex flex-col space-y-10  mt-7  p-4  h-fit xl:items-start items-center">
          <h2 className={`${playfair.className} w-96 text-3xl font-[700]`}>
            Um Lançamento Com Excelência E Qualidade
          </h2>
          <p className="font-extralight text-md">
            Oportunidade única para quem tem bom gosto e quer morar bem aqui em
            Valparaiso
          </p>
          <Link
            href=""
            className="border-2 border-yellow-600 w-fit px-8 py-3 font-[700] text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all ease-in-out  rounded"
          >
            Plantas
          </Link>
        </div>
        <img
          src={"/temp.png"}
          className=" xl:mt-[-205px] z-10 bg-transparent flex flex-1"
        />
      </div>
      <div className="max-w-[1200px] mx-auto mb-8">
        <h2 className="text font-[700]  text-3xl text-center mb-6">Endereço aqui</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.655028886112!2d-47.97700482486391!3d-16.083381484598178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359858fb0af83a7%3A0x775b6a22cc9dc214!2sImobili%C3%A1ria%20Martins%20e%20Silva!5e0!3m2!1spt-BR!2sbr!4v1711832737732!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </main>
  );
}
