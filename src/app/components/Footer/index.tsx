import Link from "next/link";
import React from "react";
import { FaPhoneFlip, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-[1200px] py-3 h-[80px] mx-auto text-yellow-600 flex justify-evenly text-sm">
          <Link href={"#"} className="flex gap-2 items-center justify-center w-fit">
          <FaPhoneFlip size={22} />
            <span>Central de Vendas - 8002-8922</span>
          </Link>
          <Link href={"#"} className="flex gap-2 items-center justify-center w-fit">
            <MdEmail size={25} />
            <span>Atendimento por email - emailteste@gmail.com</span>
          </Link>
        
          <Link href={"#"} className="flex gap-2 items-center justify-center w-fit">
          <FaWhatsapp size={25} />
            <span>Whatsapp - 61 9 0000</span>
          </Link>
      </div>
    </footer>
  );
};
