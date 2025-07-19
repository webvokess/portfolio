import clsx from "clsx";
import Image from "next/image";
import React from "react";

type AnimatedImageProps = {
  image: string;
};

export default function AnimatedImage({ image }: AnimatedImageProps) {
  return (
    <div className={clsx("w-[100%] h-[350px] flex justify-center relative")}>
      <Image src={image} alt={"animated_image"} fill priority />
    </div>
  );
}
