import GitConsole from "@/components/common/consoles/git/GitConsole";
import Navbar from "@/components/common/navbar/Navbar";
import clsx from "clsx";

interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={clsx(
        "w-full bg-hero_bg bg-center bg-cover",
        "scroll-smooth"
      )}>
      <div className={clsx("w-full mx-auto relative")}>
        <Navbar />
        <div className={clsx("dark_glass", "w-full")}>
          <div
            className={clsx(
              "w-full max-w-[1300px] m-auto"
            )}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
