"use client";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [navbar, setNavBar] = useState<boolean>(false);
  return (
    <header className={` bg-slate-400 z-50 w-full ${navbar ? " fixed " : ""}`}>
      <div className="mx-auto max-w-[1200px] bg-zinc-100 flex justify-between py-4 items-center  px-8 text-gray-500 max-h-20">
        <Image
          src={"/pao.svg"}
          height={120}
          width={120}
          alt=""
          className="object-cover z-40"
        />
        <nav className="flex">
          <button
            className="sm:hidden bg-red-600 h-fit m-auto z-30"
            onClick={() => setNavBar((e) => !e)}
          >
            {navbar ? "x" : "="}
          </button>
          <ul
            className={` items-center justify-centertransition-all z-50 h-0 w-full transition-all flex ${navbar ? "flex fixed w-full top-[70px] right-0 bg-pink-500 flex-col h-screen items-center gap-10" : ""}`}
          >
            <li
              className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 "
              onClick={() => setNavBar((e) => !e)}
            >
              Home
            </li>
            <li
              className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 "
              onClick={() => setNavBar((e) => !e)}
            >
              Venda
            </li>
            <li
              className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 "
              onClick={() => setNavBar((e) => !e)}
            >
              Locação
            </li>
            <li
              className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 "
              onClick={() => setNavBar((e) => !e)}
            >
              Quem Somos
            </li>
            <li
              className="border-b-4 border-transparent hover:border-cyan-400 transition duration-500 p-2 "
              onClick={() => setNavBar((e) => !e)}
            >
              Fale Conosco
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
