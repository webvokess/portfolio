import React from "react";
import ConsoleSecction from "../Container/ConsoleSecction";
import { AiFillCompass } from "react-icons/ai";
import Techs from "./Techs/Techs";
import clsx from "clsx";
import { DiJsBadge, DiReact } from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiAzurepipelines,
  SiFigma,
  SiBlender,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import {
  TbAugmentedReality,
  TbTexture,
} from "react-icons/tb";
import HeaderLine from "@/components/common/consoles/console_lines/HeaderLine";

export default function Experience() {
  const dataFront = {
    header: {
      label: "front_end",
      items: ["TYPE", "NAME"],
    },
    description: {
      label: "Level",
      items: [
        {
          prefix: "RUNTIME",
          icon: <DiJsBadge />,
          label: "JS/TS",
        },
        {
          prefix: "LIB",
          icon: <DiReact />,
          label: "React",
        },
        {
          prefix: "FRAMEWORK",
          icon: <SiNextdotjs />,
          label: "Next.js",
        },
        {
          prefix: "FRAMEWORK",
          icon: <SiTailwindcss />,
          label: "Tailwind",
        },
        {
          prefix: "LIB",
          icon: <SiSass />,
          label: "SASS",
        },
        {
          prefix: "LIB",
          icon: <SiThreedotjs />,
          label: "Three.js",
        },
        {
          prefix: "LIB",
          icon: <TbAugmentedReality />,
          label: "WebXR",
        },
      ],
    },
  };

  const dataBack = {
    header: {
      label: "back_end",
      items: ["TYPE", "NAME"],
    },
    description: {
      label: "Level",
      items: [
        {
          prefix: "RUNTIME",
          icon: <SiNodedotjs />,
          label: "Node",
        },
        {
          prefix: "LIB",
          icon: <SiExpress />,
          label: "Express.js",
        },
        {
          prefix: "FRAMEWORK",
          icon: <SiDotnet />,
          label: ".NET",
        },
        {
          prefix: "SQL",
          icon: <SiMicrosoftsqlserver />,
          label: "SQL Server",
        },
        {
          prefix: "Cloud",
          icon: <VscAzure />,
          label: "Azure",
        },
        {
          prefix: "CI/CD",
          icon: <SiAzurepipelines />,
          label: "Azure DevOps",
        },
      ],
    },
  };

  const dataDesign = {
    header: {
      label: "design",
      items: ["TYPE", "NAME"],
    },
    description: {
      label: "Level",
      items: [
        {
          prefix: "Design",
          icon: <SiFigma />,
          label: "Figma Design",
        },
        {
          prefix: "LIB",
          icon: <SiBlender />,
          label: "Blender",
        },
        {
          prefix: "LIB",
          icon: <TbTexture />,
          label: "Substance Painter",
        },
      ],
    },
  };

  return (
    <ConsoleSecction
      id={"experience"}
      border={true}
      branch='level'
      icon={<AiFillCompass />}>
      <div>
        <div className={clsx("w-full")}>
          <HeaderLine>My_stack</HeaderLine>
        </div>

        <div
          id='experience_techs'
          className={clsx(
            "lg:w-full lg:flex lg:justify-between",
            "flex flex-wrap md:gap-0",
            "gap-6"
          )}>
          <div
            className={clsx(
              " lg:w-[30%]",
              "md:w-[50%] w-[100%]"
            )}>
            <Techs
              headers={dataFront.header}
              descriptions={dataFront.description}
            />
          </div>
          <div
            className={clsx(
              "lg:w-[30%]",
              "md:w-[50%]",
              "w-[100%]"
            )}>
            <Techs
              headers={dataBack.header}
              descriptions={dataBack.description}
            />
          </div>
          <div
            className={clsx(
              "lg:w-[30%]",
              "md:w-[50%]",
              "w-[100%]"
            )}>
            <Techs
              headers={dataDesign.header}
              descriptions={dataDesign.description}
            />
          </div>
        </div>
      </div>
    </ConsoleSecction>
  );
}
