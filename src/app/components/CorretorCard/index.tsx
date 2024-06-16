import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

type CardTipes = {
  name: string;
  creci: string;
  phone?: string;
  email?: string;
  imgSrc?: string;
};
export const CorretorCard = ({
  name,
  creci,
  phone,
  email,
  imgSrc,
}: CardTipes) => {
  return (
    <div>
      <div className="mx-auto w-[80%] sm:w-[300px] h-[400px] rounded-lg overflow-hidden relative border group shadow-lg hover:shadow-2xl p-4 transition-all duration-500 hover:mt-[-5px] hover:shadow-gray-500">
        <div className="w-full h-[25%]"></div>
        <div>
          <div className=" rounded-full h-[155px] w-[155px] mx-auto mt-[-25%]  border-white flex justify-center items-center overflow-hidden">
            {/* <Image
              src={`/${imgSrc}`}
              alt="photo"
              width={155}
              height={155}
              className="w-[150px] h-[150px] rounded-full border-gray-600 border group-hover:scale-125 transition-all duration-700 hover:scale-125"
            /> */}
            <FaUserCircle size={75} />
          </div>
          <h2 className="mt-8 mx-auto  text-center text-lg font-[500]">
            Corretor(a): {name}
          </h2>
          <p className="text-center">Creci: {creci}</p>
        </div>
        <div className=" w-full h-[15%] absolute bottom-0 border-t mx-auto flex justify-center flex-1 items-center gap-x-8">
          {phone && (
            <span
              className="rounded-md h-10 w-10 border flex items-center justify-center
            hover:scale-125 bg-gray-100 transition-all duration-700
            "
            >
              <Link href={`https://wa.me/${phone}`} target="_blank">
                <FaWhatsapp size={30} />
              </Link>
            </span>
          )}
          {email && (
            <span className="rounded-md h-10 w-10 border flex items-center justify-center hover:scale-125 bg-gray-100 transition-all duration-700">
              <Link href={`mailto:${email}`} target="_blank">
                <IoMdMail size={30} />
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
