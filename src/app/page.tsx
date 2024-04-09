import Link from "next/link";
import { Header } from "./components/Header/index";
import { playfair } from "./fonts";
import { roboto } from "./fonts";
import { Footer } from "./components/Footer";
import CardImoveis from "./components/CardImoveis";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen text-center justify-center items-center flex">
      <h1 className="text-2xl font-[700] ">
        Trabalhando nisso
      </h1>
    </div>
  );
}
