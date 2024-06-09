import { playfair } from "./fonts";
import { roboto } from "./fonts";
import { TitlePage } from "./components/TitlePage";
import { CardMap } from "./components/CardMap";
import { CorretoresSection } from "./components/CorretoresSection";
import { LocalSection } from "./components/LocalSection";
import { CardsServices } from "./components/CardsServices";
import { ImoveisSection } from "./components/ImoveisSection";
import { About } from "./components/About";
import { InfoSection } from "./components/InfoSection";


export default function Home() {
  return (
    <main>
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
        id="inicio"
      >
        <div className="flex flex-col gap-y-6">
          <h2
            className={`${playfair.className}  text-6xl sm:text-7xl font-[500] text-white max-w-[90%]  mx-auto text-center  tracking-widest`}
            style={{ textShadow: "5px 1px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Pensando em comprar ou vender?
          </h2>
          <h3
            className={`${roboto.className} text-4xl font-[200] text-white tracking-widest max-w-[90%] text-center mx-auto`}
            style={{ textShadow: "5px 1px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Os melhores imóveis do Valparaíso e região estão aqui!
          </h3>
          <div className="w-[300px] bg-yellow-700 h-1 mx-auto rounded-lg mt-2"></div>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div className=" max-w-[1200px] mx-auto mt-12">
        <div id="vendaaa" >
          <TitlePage
            firstTitle="Imóveis em destaque"
            subTitle=" Os melhores imóveis á venda você encontra aqui"
          />
          <ImoveisSection />
        </div>
        <LocalSection />
        <div id="servicos" >
          <TitlePage
            firstTitle="O que nós fazemos?"
            subTitle="Veja alguns dos nossos serviços"
          />
        </div>
      </div>
      <CardsServices />

      <TitlePage
        firstTitle="Nossos Corretores"
        subTitle="Conheça nosso time de corretores especializados"
      />
      <CorretoresSection />
      <div id="ondeficamos">
        <CardMap />
      </div>
      <InfoSection />
    </main>
  );
}
