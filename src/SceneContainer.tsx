import { Environment } from "@react-three/drei";
import { Suspense } from "react";

const SceneContainer = () => {
  return (
    <Suspense fallback={null}>
      <Environment background={"only"} files={""} />
      <Environment />
    </Suspense>
  );
};

export default SceneContainer;
