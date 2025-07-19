import clsx from "clsx";
import HeaderText from "../../text/HeaderText";
import { MdKeyboardArrowRight } from "react-icons/md";
import BodyText from "../../text/BodyText";

interface BodyLineProps {
  children: string;
}

export default function BodyLine({
  children,
}: BodyLineProps) {
  return (
    <div
      className={
        "flex font-700 text-[32px] font-main justify-start items-start"
      }>
      <div
        className={clsx(
          "-ml-[10px] text-yellow-900 pr-[15px]"
        )}>
        <MdKeyboardArrowRight />
      </div>
      <div
        className={clsx("-ml-3 text-white-1000 flex mt-1")}>
        <BodyText
          color={"text-white-1000"}
          uppercase={false}
          weight={"font-300"}>
          {children}
        </BodyText>
      </div>
    </div>
  );
}
