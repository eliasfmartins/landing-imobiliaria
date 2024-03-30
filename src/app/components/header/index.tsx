"use client";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [navbar, setNavBar] = useState<boolean>(false);
  return (
    <header
      className={` bg-zinc-100 z-50 w-full ${navbar ? " fixed mb-[80px]" : ""}`}
    >
      <div className="mx-auto max-w-[1200px] bg-zinc-100 flex justify-between py-4 items-center  px-4 text-gray-800 max-h-20">
        <Image
          src={"/pao.svg"}
          height={120}
          width={120}
          alt=""
          className="object-cover z-40"
        />
        <nav className="flex">
          <button
            className="sm:hidden h-fit m-auto z-30 w-8 flex items-center flex-col gap-1 p-1 relative"
            onClick={() => setNavBar((e) => !e)}
          >
            <hr
              className={`bg-blue-700 h-1  w-full rounded border-none transition-all transform absolute ${navbar ? "rotate-[50deg] top-3 " : "top-2 "}`}
            />
            <hr
              className={` h-1  w-full rounded border-none transition-all transform absolute  ${navbar ? "bg-transparent top-2 " : "bg-blue-700 top-3"}`}
            />
            <hr
              className={`bg-blue-700 h-1  w-full rounded border-none transition-all transform absolute top-4 ${navbar ? "rotate-[-50deg] " : ""}`}
            />
          </button>
          <ul
            className={`  justify-centertransition-all z-50  transition-all w-full   flex-col  sm:w-auto sm:gap-0 sm:flex-row sm:visible sm:flex items-center flex bg-zinc-100 duration-1000 overflow-hidden top-[80px] right-0 left-0 justify-start gap-9 fixed h-0 sm:h-auto sm:static ${navbar ? " w-full t h-screen pt-12  " : "invisible flex transition-all duration-1000"}`}
          >
            <li
              className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 "
              onClick={() => setNavBar(false)}
            >
              Home
            </li>
            <li
              className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 "
              onClick={() => setNavBar(false)}
            >
              Venda
            </li>
            <li
              className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 "
              onClick={() => setNavBar(false)}
            >
              Locação
            </li>
            <li
              className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 "
              onClick={() => setNavBar(false)}
            >
              Quem Somos
            </li>
            <li
              className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 "
              onClick={() => setNavBar(false)}
            >
              Fale Conosco
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
