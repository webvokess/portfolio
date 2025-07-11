import React from "react";
import BodyText from "../text/BodyText";
import ProyectCardTitle from "./ProyectCardTitle";
import { clsx } from "clsx";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";

interface ProyectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  techs: Array<string>;
  linkTo: Function;
}

export default function ProyectCard({
  icon,
  title,
  description,
  techs,
  linkTo,
}: ProyectCardProps) {
  return (
    <div
      className={clsx(
        "w-full",
        "flex flex-col gap-4"
      )}>
      <div
        className={clsx(
          "image_project",
          "w-full h-[187px] relative",
          "text-[150px] text-yellow-900 text-center flex justify-center items-center"
        )}>
        {icon}
      </div>
      <div
        className={clsx(
          "title_description_project",
          "flex gap-2 flex-col w-full"
        )}>
        <ProyectCardTitle>{title}</ProyectCardTitle>
        <BodyText
          color={"text-white-1000"}
          uppercase={false}
          weight={"font-300"}>
          {description}
        </BodyText>
      </div>
      <div className='techs_card_project'>
        <BodyText
          color={"text-yellow-900"}
          uppercase={true}
          weight={"font-700"}>
          Techs
        </BodyText>
        <div className='flex flex-wrap gap-2 pl-4'>
          {techs.map((item, index) => (
            <BodyText
              key={index}
              color={"text-white-1000"}
              uppercase={true}
              weight={"font-300"}>
              {index !== techs.length - 1
                ? `${item},`
                : `${item}.`}
            </BodyText>
          ))}
        </div>
      </div>
      <div className='button_project'>
        <PrimaryButton event={linkTo}>Visit</PrimaryButton>
      </div>
    </div>
  );
}
