import * as THREE from "three";

export const GenerateVideo = (
  path: string
): THREE.MeshBasicMaterial => {
  const videoTag = document.createElement("video");
  videoTag.muted = true;
  videoTag.loop = true;
  videoTag.controls = true;
  videoTag.playsInline = true;
  videoTag.autoplay = true;
  videoTag.src = path;
  videoTag.play();

  const map = new THREE.VideoTexture(videoTag);
  map.encoding = THREE.sRGBEncoding;
  map.flipY = false;

  return new THREE.MeshBasicMaterial({ map: map });
};
