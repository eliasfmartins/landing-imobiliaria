import React from "react";
import { CorretorCard } from "../CorretorCard";

export const CorretoresSection = () => {
  return (
    <div className="flex flex-col sm:flex-row   bg-pink-500 w-full  max-w-[600px] gap-8 justify-center mx-auto p-8">
      <CorretorCard
        creci="78545-DF"
        name="Carla Martins"
        email="Carlinha Martins"
        phone="5145415154"
      />
      <CorretorCard
        creci="78545-DF"
        name="Carla Martins"
        email="Carlinha Martins"
        phone="5145415154"
      />
    </div>
  );
};
