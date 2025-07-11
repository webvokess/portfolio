import clsx from "clsx";
import GitConsole from "../git/GitConsole";
import CPUConsole from "../cpu/CPUConsole";
import ConnectionStatus from "../Internet/ConnectionStatus";

interface HeaderConsoleProps {
  branch: string;
  icon: React.ReactNode;
}

export default function HeaderConsole({
  branch,
  icon,
}: HeaderConsoleProps) {
  return (
    <div
      className={clsx(
        "w-full flex justify-between flex-wrap"
      )}>
      <GitConsole branch={branch} icon={icon} />

      {/* <CPUConsole /> */}
      <ConnectionStatus />
    </div>
  );
}
