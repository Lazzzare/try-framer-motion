import { delay, motion } from "framer-motion";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <motion.div
        className="red-box"
        animate={{
          x: 500,
          y: 300,
          backgroundColor: color,
          transition: { delay: 0.5, type: "spring" },
        }}
      ></motion.div>
      <button onClick={() => setColor("blue")}>Make it blue</button>
    </div>
  );
}

export default App;
