import {
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  HueSaturation,
  BrightnessContrast,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { Suspense } from "react";
import FloatingIsland from "./FloatingIsland";
import Portal from "./Portal";
import FloatingRocks from "./FloatingRocks";
import Rocks from "./Rocks";
import Trees from "./Trees";
import Words from "./Words";
import Grass from "./Grass";

const SceneContainer = () => {
  return (
    <Suspense fallback={null}>
      <Environment background={"only"} files={"/textures/bg.hdr"} />
      <Environment background={false} files={"/textures/envmap.hdr"} />

      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[-1.75, 10.85, 20.35]}
      />
      <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />

      <Float speed={0.5} rotationIntensity={0.6} floatIntensity={0.6}>
        <Portal />
        <Rocks />
        <FloatingIsland />
        <Trees />
        <Words />
        <Grass />
      </Float>
      <FloatingRocks />

      <EffectComposer stencilBuffer={true}>
        <DepthOfField
          focusDistance={0.012}
          focalLength={0.015}
          bokehScale={7}
        />
        <HueSaturation hue={0} saturation={-0.15} />
        <BrightnessContrast brightness={0.0} contrast={0.035} />
        <ChromaticAberration
          radialModulation={true}
          offset={[0.00175, 0.00175]}
        />
      </EffectComposer>
    </Suspense>
  );
};

export default SceneContainer;
