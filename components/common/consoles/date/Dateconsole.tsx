import { useEffect, useState } from "react";
import clsx from "clsx";
import MinConsoleText from "../../text/MinConsole";

export default function DateConsole() {
  const [date, setDate] = useState<Date>(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={clsx("flex gap-3")}>
      <div id='clock'>
        <MinConsoleText color={"text-yellow-900"}>
          {date.toLocaleTimeString()}
        </MinConsoleText>
      </div>
      <div>
        <MinConsoleText color={"text-white-1000"}>
          |
        </MinConsoleText>
      </div>
      <div className='flex gap-2'>
        <MinConsoleText color={"text-yellow-900"}>
          {new Date().toLocaleDateString()}
        </MinConsoleText>
      </div>
    </div>
  );
}
