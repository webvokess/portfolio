import { clsx } from "clsx";
import ButtonArrowLeft from "../icons/ButtonArrowLeft";
import ButtonArrowRight from "../icons/ButtonArrowRight";

interface PrimaryButtonProps {
  children: string;
  event: Function;
}

export default function PrimaryButton({
  children,
  event,
}: PrimaryButtonProps) {
  return (
    <button
      className='flex button_primery_console'
      onClick={() => event()}>
      <ButtonArrowLeft />
      <p
        className={clsx(
          "px-2 h-[35px] bg-yellow-700 flex items-center justify-center",
          "font-main text-grey-900 font-500"
        )}>
        _{children}
      </p>
      <ButtonArrowRight />
    </button>
  );
}
