import Link from "next/link";
import { Header } from "./components/Header/index";
import { playfair } from "./fonts";
import { roboto } from "./fonts";
import { Footer } from "./components/Footer";
import Image from "next/image";
import { TitlePage } from "./components/TitlePage";
import { CardMap } from "./components/CardMap";
import { CorretoresSection } from "./components/CorretoresSection";
import { LocalSection } from "./components/LocalSection";
import { CardsServices } from "./components/CardsServices";
import { ImoveisSection } from "./components/ImoveisSection";

export default function Home() {
  return (
    <main>
      <Header />
      <div
        className="flex items-center justify-center text-center "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #000000eb, #000000da), url(/tower.jpg)",
          filter: "brightness(150%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh )",
        }}
      >
        <div className="flex flex-col gap-y-6">
          <h2
            className={`${playfair.className}  text-6xl sm:text-7xl font-[500] text-white max-w-[90%] mx-auto tracking-widest`}
            style={{ textShadow: "5px 1px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Pensando em comprar ou vender?
          </h2>
          <h3
            className={`${roboto.className} text-4xl font-[200] text-white tracking-widest`}
            style={{ textShadow: "5px 1px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Os melhores imóveis do Valparaíso e região estão aqui!
          </h3>
          <div className="w-[300px] bg-yellow-700 h-1 mx-auto rounded-lg mt-2"></div>
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
        <Image
          width={1200}
          height={1200}
          alt=""
          src={"/temp.png"}
          className=" xl:mt-[-205px] z-10 bg-transparent flex flex-1"
        />
      </div>
      <div className=" max-w-[1200px] mx-auto mt-12">
        <TitlePage
          firstTitle="Imóveis em destaque?"
          subTitle=" Os melhores imóveis á venda você encontra aqui"
        />
       <ImoveisSection/>
        <TitlePage
          firstTitle="O que nós fazemos?"
          subTitle="Veja alguns dos nossos serviços"
        />
      </div>
      <CardsServices/>
      <LocalSection />

      <TitlePage
        firstTitle="Nossos Corretores"
        subTitle="Conheça nosso time de corretores especializados"
      />
      <CorretoresSection />
      <CardMap />
      <Footer />
    </main>
  );
}
