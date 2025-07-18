import clsx from "clsx";

interface BodyTextProps {
  children: string | React.ReactNode;
  color: string;
  uppercase: boolean;
  weight: string;
}

export default function BodyText({ children, color, uppercase, weight = "font-300" }: BodyTextProps) {
  return (
    <p
      className={clsx(
        "text-16p font-main font-300 leading-16",
        `${color}`,
        `${uppercase ? "uppercase" : "normal"}`,
        `${weight}`
      )}>
      {children}
    </p>
  );
}
