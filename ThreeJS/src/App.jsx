import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import "./App.css";

const App = () => {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  );
};

export default App;
