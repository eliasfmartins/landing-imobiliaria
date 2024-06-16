import { playfair } from "@/app/fonts";
import React from "react";
type TitlePageProps = {
  firstTitle: string;
  subTitle?: string;
};
export const TitlePage = ({ firstTitle, subTitle }: TitlePageProps) => {
  return (
    <div className={`${playfair.className}`}>
      <div className=" max-w-[1200px] mx-auto mt-5">
        <h2 className=" flex  justify-center text-4xl text-center">
          {firstTitle}
        </h2>
        <div className="w-[25%] h-1 bg-yellow-600 mx-auto  rounded-full mt-8" />
        <div className="w-[20%] h-1 bg-yellow-600 mx-auto mb-6  rounded-full my-3" />
        {subTitle && <p className="my-5 text-center">{subTitle}</p>}
      </div>
    </div>
  );
};
