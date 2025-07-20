import React from "react";
import { useThree } from "@react-three/fiber";
import { DirectionalLight } from "three";
import * as THREE from "three";

function DirectionalLightWithShadow() {
  const { scene } = useThree();

  const directionalLight = React.useRef<any>();

  React.useEffect(() => {
    if (directionalLight.current) {
      directionalLight.current.castShadow = true;
      directionalLight.current.shadow.mapSize.width = 2024;
      directionalLight.current.shadow.mapSize.height = 2024;
      directionalLight.current.shadow.camera.near = 0.5;
      directionalLight.current.shadow.camera.far = 500;
      directionalLight.current.position.set(3, 15, 2);
      directionalLight.current.target.position.set(0, 0, 0);

      directionalLight.current.shadow.camera.top = 100;
      directionalLight.current.shadow.camera.bottom = -100;
      directionalLight.current.shadow.camera.left = -100;
      directionalLight.current.shadow.camera.right = 100;
      directionalLight.current.shadow.bias = -0.001;
      // directionalLight.current.shadow.radius = 10;

      directionalLight.current.intensity = 1;
      directionalLight.current.color = new THREE.Color(
        0xff0000
      );

      scene.add(directionalLight.current);
    }
  }, [scene]);

  return <directionalLight ref={directionalLight} />;
}

export default DirectionalLightWithShadow;
