import {
  OrbitControls,
  ScrollControls,
  Environment,
  ContactShadows,
  Stars,
} from "@react-three/drei";
import { Meteor } from "./Meteor";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <Environment preset="sunset" background={false} />
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4}
      />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={0} damping={0.25}>
        <Meteor />
      </ScrollControls>
    </>
  );
};
