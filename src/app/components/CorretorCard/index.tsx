import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

type CardTipes = {
  name: string;
  creci: string;
};
export const CorretorCard = ({ name, creci }: CardTipes) => {
  return (
    <div>
      <div className="mx-auto bg-purple-600 w-[280px] h-[400px] rounded-lg overflow-hidden relative">
        <div className="bg-red-600 w-full h-[25%]"></div>
        <div>
          <div className="bg-orange-500 rounded-full h-[150px] w-[150px] mx-auto mt-[-25%] border-4 border-white"></div>
          <h2 className="mt-8 mx-auto bg-slate-400 text-center text-lg font-[500]">
            Corretora: {name}
          </h2>
          <p className="text-center">Creci: {creci}</p>
        </div>
        <div className=" w-full h-[15%] absolute bottom-0 border-t mx-auto flex justify-center flex-1 items-center gap-x-8">
          <span>
            <IoMdMail size={30} />
          </span>
          <span>
            <FaWhatsapp size={30} />
          </span>
        </div>
      </div>
    </div>
  );
};
