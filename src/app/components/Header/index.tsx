"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
  const [navbar, setNavBar] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);
  
  // Handle screen resize events
  useEffect(() => {
  const desactivateNavBar = () => setNavBar(false);
    window.addEventListener("resize", desactivateNavBar);
    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", desactivateNavBar);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0 && isTop) {
        setIsTop(false);
      } else if (scrollPosition === 0 && !isTop) {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTop]);


  return (
    <header
      className={` z-50 w-full fixed  transition-all ease-in-out duration-1000  ${navbar ? " fixed mb-[80px]" : ""} ${isTop?'bg-transparent-600 ':'bg-black/80'}`}
    >
      <div className="mx-auto max-w-[1200px] bg-transparent flex justify-between py-4 items-center  px-4 text-gray-800 max-h-20">
        <Image
          src={"/pao.svg"}
          height={120}
          width={120}
          alt=""
          className="object-cover z-40"
        />
        <nav className="flex">
          <button
            className="sm:hidden h-[25px] m-auto z-30 w-8 flex items-center flex-col gap-1 p-1 relative"
            onClick={() => setNavBar((e) => !e)}
          >
            <hr
              className={`bg-yellow-600 h-1  w-full rounded border-none transition-all transform absolute ${navbar ? "rotate-[50deg] top-2 " : "top-0 "}`}
            />
            <hr
              className={` h-1  w-full rounded border-none transition-all transform absolute  ${navbar ? "bg-transparent top-1 " : "bg-yellow-600 top-2"}`}
            />
            <hr
              className={`bg-yellow-600 h-1  w-full rounded border-none transition-all transform absolute  ${navbar ? "rotate-[-50deg] top-2 " : "top-4"}`}
            />
          </button>
          <ul
            className={`  justify-centertransition-all z-50  transition-all w-full   flex-col  sm:w-auto sm:gap-0 sm:flex-row sm:visible sm:flex  text-white  font-[700] items-center flex  duration-1000 overflow-hidden top-[80px] right-0 left-0 justify-start gap-9 fixed h-0 sm:h-auto sm:static ${navbar ? " w-full t h-screen pt-12  " : "invisible flex transition-all duration-1000"}`}
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
