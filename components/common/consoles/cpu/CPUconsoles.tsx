import clsx from "clsx";
import MinConsoleText from "../../text/MinConsole";

export default function CPUConsole() {
  return (
    <div className={clsx("flex gap-3")}>
      <div>
        <MinConsoleText color={"text-yellow-900"}>
          1s
        </MinConsoleText>
      </div>
      <div>
        <MinConsoleText color={"text-white-1000"}>
          |
        </MinConsoleText>
      </div>
      <div className='flex gap-2'>
        <MinConsoleText color={"text-white-1000"}>
          CPU
        </MinConsoleText>
        <MinConsoleText color={"text-yellow-900"}>
          13.7%
        </MinConsoleText>
      </div>
      <div>
        <MinConsoleText color={"text-white-1000"}>
          |
        </MinConsoleText>
      </div>
      <div className='flex gap-2'>
        <MinConsoleText color={"text-white-1000"}>
          RAM
        </MinConsoleText>
        <MinConsoleText color={"text-yellow-900"}>
          12/32GB
        </MinConsoleText>
      </div>
    </div>
  );
}
