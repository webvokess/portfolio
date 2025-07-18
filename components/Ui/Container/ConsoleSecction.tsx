import FooterConsole from "@/components/common/consoles/header_consoles/FooterConsole";
import HeaderConsole from "@/components/common/consoles/header_consoles/HeaderConsole";
import React from "react";
import clsx from "clsx";

interface ConsoleSecctionProps {
  id: string;
  children: React.ReactElement;
  icon: React.ReactNode;
  branch: string;
  border: boolean;
}

export default function ConsoleSecction({
  id,
  children,
  icon,
  branch,
  border = false,
}: ConsoleSecctionProps) {
  return (
    <div
      id={id}
      className={clsx(
        "py-9",
        border ? "border-b-[1px] border-grey-300" : ""
      )}>
      <HeaderConsole branch={branch} icon={icon} />
      <div className={clsx("py-6")}>{children}</div>
      <FooterConsole />
    </div>
  );
}
