import { MdKeyboardArrowRight } from "react-icons/md";
import HeroText from "../../text/HeroText";
import clsx from "clsx";
import { useEffect } from "react";

interface HeroLineProps {
  children: string;
}

export default function HeroLine({ children }: HeroLineProps) {
  return (
    <div className={"flex font-700 text-72p font-main justify-start items-center"}>
      <div className={clsx("lg:text-72p lg:-ml-[27px] text-yellow-900", "md:text-48p", "text-32p -ml-[10px]")}>
        <MdKeyboardArrowRight />
      </div>
      <div className={clsx("mr-2 text-white-1000")}>
        <HeroText>{children}</HeroText>
      </div>
    </div>
  );
}
