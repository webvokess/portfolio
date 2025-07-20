import React from "react";
import clsx from "clsx";
import Img from "next/image";
import { BsArrowsMove } from "react-icons/bs";
import { BiRun } from "react-icons/bi";
import { useLoaderScene } from "../../Store/ThreeState";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import LoaderRobot from "./LoaderRobot";

export default function Loader() {
  const {
    isMusicLoaded,
    isSceneLoaded,
    setHideLoader,
    setPlayMusic,
    hideLoader,
  } = useLoaderScene((state) => state);
  const loaderContainer =
    React.useRef<HTMLDivElement>(null);

  if (hideLoader) {
    const loader = document.getElementById("three-loader");
    loaderContainer.current?.classList.add(
      "fade-out-animation-loader"
    );
    setTimeout(() => {
      if (loaderContainer.current) {
        loaderContainer.current.style.display = "none";
      }
    }, 1000);
  }

  return (
    <div
      id='three-loader'
      ref={loaderContainer}
      className={clsx(
        "absolute top-0 left-0",
        "w-[100%] h-[100vh] bg-grey-1000 z-50",
        "flex justify-center items-center flex-col gap-6"
      )}>
      {isMusicLoaded && isSceneLoaded ? (
        <div
          className={clsx(
            "flex justify-center items-center flex-col gap-6"
          )}>
          <div>
            <h1
              className={clsx(
                "text-white-1000 font-600 font-main text-32p uppercase"
              )}>
              Welcome to my 3d portfolio v2.1.0
            </h1>
            <p
              className={clsx(
                "text-yellow-700 font-300 font-main text-14p text-center"
              )}>
              (Still under construction)
            </p>
          </div>
          <div
            className={clsx(
              "flex w-[500px] justify-between flex-wrap gap-5"
            )}>
            <div
              className={clsx(
                "flex items-center gap-6",
                "text-white-1000 font-600 font-main text-16p"
              )}>
              <p>Move(AWSD):</p>
              <BsArrowsMove className='text-32p' />
            </div>
            <div
              className={clsx(
                "flex items-center gap-6",
                "text-white-1000 font-600 font-main text-16p"
              )}>
              <p>Hold Shift to run:</p>
              <BiRun className='text-32p' />
            </div>
            <div
              className={clsx(
                "w-[100%]",
                "flex items-center flex-col gap-2",
                "text-white-1000 font-600 font-main text-16p text-center"
              )}>
              <p>Interactions with the mouse:</p>
              <svg
                width='35'
                height='34'
                viewBox='0 0 35 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <circle
                  cx='12'
                  cy='12'
                  r='11.5'
                  stroke='white'
                />
                <path
                  d='M18.904 27.563C18.9572 27.8019 19.0822 28.0189 19.2621 28.1847C19.4421 28.3506 19.6685 28.4574 19.911 28.491C20.1535 28.5245 20.4004 28.4831 20.6186 28.3722C20.8369 28.2614 21.016 28.0865 21.132 27.871L23.222 24.778L28.129 29.685C28.2281 29.7841 28.3457 29.8627 28.4752 29.9163C28.6046 29.9699 28.7434 29.9975 28.8835 29.9975C29.0236 29.9975 29.1624 29.9699 29.2918 29.9163C29.4213 29.8627 29.5389 29.7841 29.638 29.685L30.685 28.638C30.7841 28.5389 30.8627 28.4213 30.9163 28.2918C30.9699 28.1624 30.9975 28.0236 30.9975 27.8835C30.9975 27.7434 30.9699 27.6046 30.9163 27.4752C30.8627 27.3457 30.7841 27.2281 30.685 27.129L25.778 22.222L28.891 20.132C29.1065 20.0159 29.2814 19.8367 29.3921 19.6184C29.5029 19.4001 29.5442 19.1531 29.5106 18.9106C29.477 18.6682 29.37 18.4418 29.204 18.2618C29.038 18.0819 28.821 17.957 28.582 17.904L15 14L18.904 27.563Z'
                  fill='white'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
          <PrimaryButton
            key={1}
            event={() => {
              setHideLoader(true);
              setPlayMusic(true);
            }}>
            Enter
          </PrimaryButton>
        </div>
      ) : (
        <LoaderRobot />
      )}
    </div>
  );
}
