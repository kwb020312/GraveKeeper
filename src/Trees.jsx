import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Trees = () => {
  const gltf = useLoader(GLTFLoader, "/models/trees.glb");

  useEffect(() => {
    if (!gltf) return;
    let mesh = gltf.scene.children[0];
    mesh.customDepthMaterial.envMapIntensity = 2.5;
  }, [gltf]);
  return <primitive object={gltf.scene} />;
};

export default Trees;
