import CommandLine from "@/components/common/consoles/console_lines/CommandLine";
import Table_Console, {
  Table_ConsoleProps,
} from "@/components/common/consoles/console_lines/Table_Console";
import clsx from "clsx";

export default function Techs({
  headers,
  descriptions,
}: Table_ConsoleProps) {
  return (
    <div className={clsx("w-full")}>
      <CommandLine command='ls' label={headers.label} />
      <div className='pt-4 pl-[28px]'>
        <Table_Console
          headers={headers}
          descriptions={descriptions}
        />
      </div>
    </div>
  );
}
