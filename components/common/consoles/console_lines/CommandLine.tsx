import clsx from "clsx";
import HeaderText from "../../text/HeaderText";
import { MdKeyboardArrowRight } from "react-icons/md";
import BodyText from "../../text/BodyText";

interface CommandLineProps {
  command: string;
  label: string;
}

export default function CommandLine({
  command,
  label,
}: CommandLineProps) {
  return (
    <div
      className={
        "flex font-700 text-[32px] font-main justify-start items-center"
      }>
      <div
        className={clsx(
          "-ml-[10px] text-yellow-900 pr-[22px]"
        )}>
        <MdKeyboardArrowRight />
      </div>
      <div className={clsx("-ml-4 text-white-1000 flex")}>
        <BodyText
          color={"text-yellow-900"}
          uppercase={false}
          weight={"font-600"}>
          {command}
        </BodyText>
        <BodyText
          color={"text-yellow-700 pl-3"}
          uppercase={true}
          weight={"font-300"}>
          {`_${label}`}
        </BodyText>
      </div>
    </div>
  );
}
