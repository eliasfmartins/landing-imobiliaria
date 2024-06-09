// components/CardAbout.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardAboutProps = {
  id: string;
  title: string;
  subTitle: string;
  imgSrc: string;
  textBtn: string;
};

export const CardAbout = ({
  id,
  imgSrc,
  subTitle,
  textBtn,
  title,
}: CardAboutProps) => {
  const formattedImgSrc = imgSrc.startsWith("http") ? imgSrc : `/${imgSrc}`;

  return (
    <div className="sm:max-w-[280px] text-center flex flex-col justify-between h-full min-h-[350px] max-w-[90%] mx-auto sm:mx-0 rounded-lg  hover:shadow-2xl p-4 transition-all duration-500 hover:mt-[-20px] hover:shadow-gray-500 border">
      <Image
        src={formattedImgSrc}
        className="mx-auto mt-4 w-full"
        alt="icon"
        width={100}
        height={100}
      />
      <h2 className="text-center text-xl my-2">{title}</h2>
      <p>{subTitle}</p>
      <Link href={`/imoveis/${id}`} >
        <button className="w-full rounded-md bg-yellow-600 text-white p-5 hover:brightness-125 transition-all duration-1000">
          {textBtn}
        </button>
      </Link>
    </div>
  );
};
