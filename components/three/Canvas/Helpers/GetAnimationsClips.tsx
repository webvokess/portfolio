import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export const GenerateAnimationClipsArray = (
  gltf: GLTF,
  scene: THREE.Group
): Array<THREE.AnimationAction> => {
  const mixer = new THREE.AnimationMixer(scene);
  const actions: Array<THREE.AnimationAction> = [];

  for (const action of gltf.animations) {
    const clip = mixer.clipAction(action);
    actions.push(clip);
  }

  return actions;
};
