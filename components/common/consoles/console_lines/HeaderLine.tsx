import clsx from "clsx";
import HeaderText from "../../text/HeaderText";
import { MdKeyboardArrowRight } from "react-icons/md";

interface HeaderLineProps {
  children: string;
}

export default function HeaderLine({ children }: HeaderLineProps) {
  return (
    <div className={"flex font-700 text-[32px] font-main justify-start items-center"}>
      <div className={clsx("-ml-[10px] text-yellow-900 pr-[10px]")}>
        <MdKeyboardArrowRight />
      </div>
      <div className={clsx("-ml-2 text-white-1000 uppercase")}>
        <HeaderText color={"text-yellow-900"}>{children}</HeaderText>
      </div>
    </div>
  );
}
