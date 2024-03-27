"use client";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [navbar, setNavBar] = useState<boolean>(false);
  return (
    <header className="bg-zinc-100">
      <div className="mx-auto max-w-[1200px] bg-zinc-100 flex justify-between py-4 items-center text-gray-500 max-h-20">
        <Image
          src={"/pao.svg"}
          height={120}
          width={120}
          alt=""
          className="object-cover"
        />
        <nav>
          <ul
            className={` items-center justify-center h-20 sm:flex bg-red-500  ${navbar ? "h-screen flex bg-purple-600 flex-col m-auto top-0 right-0 left-0 fixed z-20" : "h-0 transition-all ease-in-out"}`}
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
          <button
            className="sm:hidden bg-red-600 z-50"
            onClick={() => setNavBar((e) => !e)}
          >
            {navbar ? "x" : "="}
          </button>
        </nav>
      </div>
    </header>
  );
};
