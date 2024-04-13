import { playfair } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const About = () => {
  return (
    <div className="min-h-[35vh] xl:flex max-w-[1200px] mx-auto">
      <div className="flex flex-col space-y-10  mt-7  p-4  h-fit xl:items-start items-center">
      <Image
        width={1200}
        height={1200}
        alt=""
        src={"/roof.svg"}
        className=" z-10  flex flex-1 w-[90%] mx-auto"
      />
        <h2 className={`${playfair.className} w-full text-3xl font-[700] text-center `}>
        Imobiliária Martins e Silva : Sua Parceira na Realização de Sonhos
        </h2>
        <p className="font-extralight text-md text-justify">
          Seja bem-vindo à Martins e Silva Imobiliária, sua nova escolha para encontrar o lar dos seus sonhos. Nossos corretores, com anos de experiência, estão prontos para ajudá-lo a encontrar o imóvel perfeito para você. Trabalhamos tanto com imóveis novos quanto usados e oferecemos um vasto catálogo para atender a diversas necessidades e preferências. Venha nos conhecer e dar o primeiro passo rumo à realização dos seus sonhos.
        </p>
        <Link
          href="#vendaaa"
          className="border-2 border-yellow-600 w-fit px-8 py-3 font-[700] text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all ease-in-out  rounded mx-auto"
        >
          Veja Alguns dos Nossos Imóveis
        </Link>
      </div>
      
    </div>
  );
};
