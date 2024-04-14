import React from "react";
import { TitlePage } from "../TitlePage";

export const LocalSection = () => {
  return (
    <div className=" w-full max-w-[1200px] mx-auto p-5">
      <TitlePage
        firstTitle="Imóveis por região"
        // subTitle="A localização de alguns dos nossos imóveis temos imoveis"
      />
      <div className=" flex w-full justify-between flex-wrap gap-8 my-12 ">
        <ul className="min-w-[250px] w-[90%] sm:w-[20%] text-center flex flex-col gap-3">
          <h3 className="text-lg font-[500]">Valparaiso-GO</h3>
          <li>Céu Azul</li>
          <li>Valparaiso I</li>
          <li>Valparaiso II</li>
          <li>Cruzeiro do Sul</li>
          <li>Cidade Jardins</li>
        </ul>
        <ul className="min-w-[250px] w-[90%] sm:w-[20%] text-center flex flex-col gap-3">
          <h3 className="text-lg font-[500]">Brasilia-DF</h3>
          <li>Asa Norte</li>
          <li>Noroeste</li>
          <li>Asa Sul</li>
          <li>Lago Norte</li>
          <li>Park Way</li>
        </ul>
        <ul className="min-w-[250px] w-[90%] sm:w-[20%] text-center flex flex-col gap-3">
          <h3 className="text-lg font-[500]">Ocidental-GO</h3>
          <li>Parque Nápolis</li>
          <li>Parque Nova Friburgo</li>
          <li>Jardim ABC</li>
          <li>Ocidental Parque</li>
          <li>Morada das Garças</li>
        </ul>
        <ul className="min-w-[250px] w-[90%] sm:w-[20%] text-center flex flex-col gap-3">
          <h3 className="text-lg font-[500]">Jardin Inga-GO</h3>
          <li>Jardim Central</li>
          <li>Jardim América</li>
          <li>Jardim Planalto</li>
          <li>Jardim Zuleika</li>
          <li>Chácaras Marajoara</li>
        </ul>
      </div>
    </div>
  );
};
