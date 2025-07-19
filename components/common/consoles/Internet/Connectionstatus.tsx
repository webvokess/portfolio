import { useState, useEffect } from "react";
import MinConsoleText from "../../text/MinConsole";
import clsx from "clsx";
import { BsFillHeartPulseFill } from "react-icons/bs";

export default function ConnectionStatus() {
  return (
    <div className={clsx("flex gap-2 items-center")}>
      <MinConsoleText color={"text-blue-600"}>
        Connection Status:
      </MinConsoleText>
      <BsFillHeartPulseFill
        className={clsx("text-green-900")}
      />
      <MinConsoleText color={"text-green-900"}>
        Online
      </MinConsoleText>
    </div>
  );
}
