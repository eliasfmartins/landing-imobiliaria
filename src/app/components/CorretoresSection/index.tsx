import React from "react";
import { CorretorCard } from "../CorretorCard";

export const CorretoresSection = () => {
  return (
    <div className="flex flex-col sm:flex-row   w-full  max-w-[600px] gap-8 justify-center mx-auto p-8">
      <CorretorCard
        creci="25.681-GO"
        name="Carla Martins"
        email="imobiliariamartinssilva@gmail.com"
        phone="61991010404"
        imgSrc="perfilcarla2.jpeg"
      />
      <CorretorCard
        creci="14.643-GO"
        name="Jhone Silva"
        email="imobiliariamartinssilva@gmail.com"
        phone="61992299329"
        imgSrc="perfiljhon.jpeg"
      />
    </div>
  );
};
