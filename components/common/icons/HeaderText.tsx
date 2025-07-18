import clsx from "clsx";

interface HeaderTextProps {
  children: string;
  color: string;
}

export default function HeaderText({
  children,
  color,
}: HeaderTextProps) {
  return (
    <h2
      className={clsx(
        "font-main text-32p font-400 leading-32p",
        `${color}`
      )}>
      {children}
    </h2>
  );
}
