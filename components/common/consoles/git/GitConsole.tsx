import clsx from "clsx";
import MinConsoleText from "../../text/MinConsole";
import { useEffect, useState } from "react";

interface GitConsoleProps {
  branch: string;
  icon: React.ReactNode;
}

export default function GitConsole({
  branch,
  icon,
}: GitConsoleProps) {
  const [windowWidth, setWindowWidth] = useState(1300);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", () => {
      handleResize;
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={clsx("flex gap-2 items-center")}>
      <MinConsoleText color={"text-blue-900"}>
        {windowWidth >= 576
          ? "Juan's Portfolio"
          : "Portfolio"}
      </MinConsoleText>
      <MinConsoleText color={"text-blue-600"}>
        git:(
      </MinConsoleText>
      <MinConsoleText color={"text-red-900"}>
        {branch}
      </MinConsoleText>
      <MinConsoleText color={"text-blue-600"}>
        )
      </MinConsoleText>

      <div className={clsx("text-24p -mt-1 text-red-900")}>
        {icon}
      </div>
    </div>
  );
}
