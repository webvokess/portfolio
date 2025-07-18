import clsx from "clsx";

interface HeroTextProps {
  children: string;
}

export default function HeroText({
  children,
}: HeroTextProps) {
  return (
    <h1
      className={clsx(
        "lg:text-[72px] lg:leading-[72px] font-main font-700 uppercase text-white",
        "md:text-[48px] md:leading-[56px]",
        "text-[32px] leading-[40px]"
      )}>
      {children}
    </h1>
  );
}
