import Link from "next/link";
import React from "react";
import { FaPhoneFlip, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-[1200px] flex-col py-3 h-auto mx-auto gap-4 sm:gap-1 items-center sm:flex-row  min-h-20 text-yellow-600 flex justify-between  text-sm">
        <Link
          href={"#"}
          className="flex gap-2 items-center justify-center w-fit p-6"
        >
          <FaPhoneFlip size={22} />
          <span>Central de Vendas - 8002-8922</span>
        </Link>
        <Link
          href={"#"}
          className="flex gap-2 items-center justify-center w-fit p-6"
        >
          <MdEmail size={25} />
          <span>Atendimento por email - emailteste@gmail.com</span>
        </Link>

        <Link
          href={"#"}
          className="flex gap-2 items-center justify-center w-fit p-6"
        >
          <FaWhatsapp size={25} />
          <span>Whatsapp - 61 9 0000</span>
        </Link>
      </div>
    </footer>
  );
};
