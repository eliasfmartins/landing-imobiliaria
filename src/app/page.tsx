import Link from "next/link";
import { Header } from "./components/Header/index";
import { playfair } from "./fonts";
import { roboto } from "./fonts";
import { Footer } from "./components/Footer";
import CardImoveis from "./components/CardImoveis";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div
        className="flex items-center justify-center text-center "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #000000e6, #000000ab), url(/tower.jpg)",
          filter: "brightness(150%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 80px)",
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
        <h2 className=" flex  justify-center text-4xl">Imóveis em destaque?</h2>
        <hr className="w-[20%] h-1 bg-yellow-600 mx-auto  rounded-full mt-8" />
        <hr className="w-[15%] h-1 bg-yellow-600 mx-auto  rounded-full mt-3" />
        <p className="text-center mt-12">
          Os melhores imóveis á venda você encontra aqui
        </p>
        <div className=" mt-[80px] flex sm:justify-between items-center w-full/20 flex-wrap mb-[80px] p-4  justify-center gap-y-8">
          <CardImoveis />
          <CardImoveis />
          <CardImoveis />
        </div>
      </div>
      <div className=" max-w-[1200px] mx-auto mt-0">
        <h2 className=" flex  justify-center text-4xl">O que nós fazemos?</h2>
        <hr className="w-[20%] h-1 bg-yellow-600 mx-auto  rounded-full mt-8" />
        <hr className="w-[15%] h-1 bg-yellow-600 mx-auto  rounded-full mt-3" />
        <p className="text-center mt-12">Veja alguns do nossos serviços</p>
        <div className=" mt-[80px] flex justify-between items-center w-full flex-wrap mb-[80px] p-4">
          <div className="sm:max-w-[280px] text-center flex flex-col justify-between h-full min-h-[350px] max-w-[90%] mx-auto sm:mx-0 rounded-lg  hover:shadow-2xl p-4 transition-all duration-500 hover:mt-[-20px] hover:shadow-gray-500">
            <Image
              src="simule.svg"
              className="mx-auto mt-4 w-full"
              alt="icon"
              width={100}
              height={100}
            />
            <h2 className="text-center text-xl my-2">
              Simulamos seu finaciamento
            </h2>
            <p className="">
              Faça uma simulação de crédito para a compra do seu novo imóvel.
            </p>
            <button className="w-full rounded-md bg-yellow-600 text-white p-5 hover:brightness-125 transition-all duration-1000">
              Simular financiamento
            </button>
          </div>
          <div className="sm:max-w-[280px] text-center flex flex-col justify-between h-full min-h-[350px] max-w-[90%] mx-auto sm:mx-0 rounded-lg  hover:shadow-2xl p-4 transition-all duration-500 hover:mt-[-20px] hover:shadow-gray-500">
            <Image
              src="find.svg"
              className="mx-auto mt-4 w-full"
              alt="icon"
              width={100}
              height={100}
            />
            <h2 className="text-center text-xl my-2">
              Encontramos seu novo lar
            </h2>
            <p className="">
              Nossa equipe te auxilia a encontrar seu imóvel com muita
              facilidade e segurança.
            </p>
            <button className="w-full rounded-md bg-yellow-600 text-white p-5 hover:brightness-125 transition-all duration-1000">
              Saiba mais
            </button>
          </div>
          <div className="sm:max-w-[280px] text-center flex flex-col justify-between h-full min-h-[350px] max-w-[90%] mx-auto sm:mx-0 rounded-lg  hover:shadow-2xl p-4 transition-all duration-500 hover:mt-[-20px] hover:shadow-gray-500">
            <Image
              src="intermediacao.svg"
              className="mx-auto mt-4 w-full"
              alt="icon"
              width={100}
              height={100}
            />
            <h2 className="text-center text-xl my-2">
              Intermediação de todo o processo{" "}
            </h2>
            <p className="">
              Acompanhamos todo o processo de compra até a entrega da sua chave.
            </p>
            <button className="w-full rounded-md bg-yellow-600 text-white p-5 hover:brightness-125 transition-all duration-1000">
              Conheça todas as etapas
            </button>
          </div>

          <div className="sm:max-w-[280px] text-center flex flex-col justify-between h-full min-h-[350px] max-w-[90%] mx-auto sm:mx-0 rounded-lg  hover:shadow-2xl p-4 transition-all duration-500 hover:mt-[-20px] hover:shadow-gray-500">
            <Image
              src="talk.svg"
              className="mx-auto mt-4 w-full"
              alt="icon"
              width={100}
              height={100}
            />
            <h2 className="text-center text-xl my-2">Fale com seu corretor</h2>
            <p className="">
              Temos uma equipe pronta para realizar a sua maior conquista.
            </p>
            <button className="w-full rounded-md bg-yellow-600 text-white p-5 hover:brightness-125 transition-all duration-1000">
              Fale conosco
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-red-400 w-full max-w-[1200px] mx-auto p-5">
        <h2 className=" text-2xl mb-5">Imóveis por região</h2>
        <div className=" flex w-full justify-between ">
          <ul>
            <h3>Valparaiso-GO</h3>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
          </ul>
          <ul>
            <h3>Brasilia-DF</h3>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
          </ul>
          <ul>
            <h3>Ocidental-GO</h3>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
          </ul>
          <ul>
            <h3>Jardin Inga-GO</h3>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
            <li>ex</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[90%] mx-auto mb-8 sm:max-w-[1200px]">
        <h2 className="text font-[700]  text-3xl text-center mb-6">
          Endereço aqui
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.655028886112!2d-47.97700482486391!3d-16.083381484598178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359858fb0af83a7%3A0x775b6a22cc9dc214!2sImobili%C3%A1ria%20Martins%20e%20Silva!5e0!3m2!1spt-BR!2sbr!4v1711832737732!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" max-w-[1200px] mx-auto mt-12">
        <h2 className=" flex  justify-center text-4xl">Nossos Corretores</h2>
        <hr className="w-[20%] h-1 bg-yellow-600 mx-auto  rounded-full mt-8" />
        <hr className="w-[15%] h-1 bg-yellow-600 mx-auto  rounded-full my-3" />
        <p className="my-5">Conheça nosso time de corretores especializados.</p>
        <div className="flex flex-col sm:flex-row  gap-4">
        <div className="mx-auto bg-purple-600 w-[280px] h-[400px] rounded-lg">
          <div className="bg-red-600 w-full h-[25%]"></div>
          <div>
            
          </div>
        </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
