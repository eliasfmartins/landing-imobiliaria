import Image from "next/image";

export default function CardImoveis() {
  return (
    <div className="flex flex-col gap-4 rounded-lg overflow-hidden group shadow-2xl w-[360px]">
      <div className="relative h-[300px] max-h-[300px] w-full  overflow-hidden ">
        <div
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.76), transparent), url(/foto.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full ease-in-out overflow-hidden group-hover:scale-125  transition-all duration-700"
        ></div>

        <div className="bg-yellow-600 text-white rounded-md p-1 inline absolute top-3 right-3">
          Á Venda
        </div>
        <p className="absolute bottom-2 left-2 text-white ">
          A partir de: <br />
          <span className="text-xl">R$ 540.000</span>
        </p>
      </div>
      <div className="p-4 flex flex-col gap-2">
        Casa á Venda com 3 quartos, 234m²
        <p>valparaiso-GO</p>
        <div className="flex gap-2">
          <p>3 Quartos</p>
          <p>5 Banheiros</p>
          <p>2 Vagas</p>
          <p>234m²</p>
        </div>
        Mais informações
      </div>
    </div>
  );
}
