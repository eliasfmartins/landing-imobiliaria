import React from "react";
import { TitlePage } from "../TitlePage";

export const InfoSection = () => {
  return (
    <div className="mx-auto max-w-[1200px] mb-8 flex flex-col gap-7">
      <TitlePage firstTitle="Horário de funcionamento" />
      <p className="text-center mx-auto">
        <span className="font-[600] ">Seg à sex:</span> 9h às 18h
      </p>
      <p className="text-center mx-auto">
        <span className="font-[600] ">Sábados:</span>08h às 12h
      </p>
      <p className="text-center mx-auto">
        <span className="font-[600] ">Domingos e feriados</span>: Não haverá
        expediente
      </p>
    </div>
  );
};
