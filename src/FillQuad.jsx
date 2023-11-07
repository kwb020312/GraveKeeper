import { useRef } from "react";
import { EqualStencilFunc } from "three";

const materialProperties = {
  depthWrite: false,
  stencilWrite: true,
  stencilFunc: EqualStencilFunc,
};

const FillQuad = ({ map, maskId }) => {
  const materialRef = useRef();
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        attach={"material"}
        {...materialProperties}
        stencilRef={maskId}
      />
    </mesh>
  );
};

export default FillQuad;
