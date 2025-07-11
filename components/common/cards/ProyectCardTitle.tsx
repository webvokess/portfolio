import React from "react";
import { clsx } from "clsx";

interface ProyectCardTitleProps {
  children: string;
}

export default function ProyectCardTitle({
  children,
}: ProyectCardTitleProps) {
  return (
    <div className={clsx("flex w-full items-center")}>
      <h2
        className={clsx(
          "h-[31px] flex justify-start px-[8px] items-center",
          "bg-yellow-900 text-grey-1000 font-main font-800 uppercase",
          "w-full"
        )}>
        {children}
      </h2>
      <svg
        width='60'
        height='35'
        viewBox='0 0 60 35'
        fill='none'
        style={{ shapeRendering: "crispEdges" }}
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M55 15H60V20H55V15Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M50 15H55V20H50V15Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M40 15H45V20H40V15Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M15 15H20V20H15V15Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M30 15H35V20H30V15Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M25 15H30V20H25V15Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M30 5H35V10H30V5Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M5 5H10V10H5V5Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M20 5H25V10H20V5Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M15 5H20V10H15V5Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M25 0H30V5H25V0Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M0 0H5V5H0V0Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M15 0H20V5H15V0Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M10 0H15V5H10V0Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M35 10H40V15H35V10Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M10 10H15V15H10V10Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M25 10H30V15H25V10Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M20 10H25V15H20V10Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M35 20H40V25H35V20Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M10 20H15V25H10V20Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M25 20H30V25H25V20Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M20 20H25V25H20V20Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M30 25H35V30H30V25Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M5 25H10V30H5V25Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M20 25H25V30H20V25Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M15 25H20V30H15V25Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M25 30H30V35H25V30Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M0 30H5V35H0V30Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M15 30H20V35H15V30Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M10 30H15V35H10V30Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M50 10H55V15H50V10Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M45 10H50V15H45V10Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M45 5H50V10H45V5Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M40 5H45V10H40V5Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M40 0H45V5H40V0Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M35 0H40V5H35V0Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M50 20H55V25H50V20Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M45 20H50V25H45V20Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M45 25H50V30H45V25Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M40 25H45V30H40V25Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M40 30H45V35H40V30Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M35 30H40V35H35V30Z'
          className={clsx("fill-yellow-900")}
        />
        <path
          d='M0 0L15 15V20L0 35V0Z'
          className={clsx("fill-yellow-900")}
        />
      </svg>
    </div>
  );
}
