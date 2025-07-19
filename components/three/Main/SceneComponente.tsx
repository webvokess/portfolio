import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../Canvas/Loader/Loader";
import { useLoaderScene } from "../Store/ThreeState";
import { PlayerSound } from "../Canvas/Sounds/PlayerSound";
import clsx from "clsx";
import LoaderRobot from "../Canvas/Loader/LoaderRobot";

const SceneDynamic = dynamic(
  () => import("../Canvas/Scene"),
  {
    loading: () => (
      <div
        className={clsx(
          "bg-grey-1000 w-full h-screen flex justify-center items-center"
        )}>
        <LoaderRobot />
      </div>
    ),
    ssr: false,
  }
);

export default function SceneComponente() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Loader />
      <Suspense fallback={null}>
        <SceneDynamic />
      </Suspense>
      <PlayerSound />
    </div>
  );
}
