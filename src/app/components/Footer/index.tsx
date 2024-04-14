import Link from "next/link";
import React from "react";
import { FaPhoneFlip, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-[1200px] flex-col py-3 h-auto mx-auto sm:gap-4  items-center sm:flex-row  min-h-20 text-yellow-600 flex justify-between  text-sm">
        {/* <Link
          href={"#"}
          className="flex gap-2 items-center justify-center w-fit py-6"
        >
          <FaPhoneFlip size={22} />
          <span>Central de Vendas - 8002-8922</span>
        </Link> */}
        <Link
          href={"mailto:imobiliariamartinssilva@gmail.com"}
          target="_blank"
          className="flex gap-2 items-center justify-center w-fit py-6"
        >
          <span className="text-ellipsis  sm:max-w-full flex justify-center items-center text-center gap-">
            <MdEmail size={25} />
            Atendimento por email - imobiliariamartinssilva@gmail.com
          </span>
        </Link>

        <Link
          href={"https://wa.me/5561991010404"}
          target="_blank"
          className="flex gap-2 items-center justify-center w-fit py-6"
        >
          <FaWhatsapp size={25} />
          <span>Whatsapp - 61 99101 0404</span>
        </Link>
      </div>
    </footer>
  );
};
