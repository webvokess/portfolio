import SceneComponente from "@/components/Three/Main/SceneComponente";
import Head from "next/head";
import React from "react";

export default function index() {
  return (
    <>
      <Head>
        <title>Welcome to the retro tech area</title>
        <link rel='shortcut icon' href='./ico/ico3d.svg' />
      </Head>
      <main>
        <div>
          <SceneComponente />
        </div>
      </main>
    </>
  );
}
