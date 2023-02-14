import { delay, motion, useMotionValue } from "framer-motion";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("red");
  const x = useMotionValue(0);

  return (
    <div>
      <motion.div
        className="red-box"
        style={{ x }}
        animate={{
          backgroundColor: color,
        }}
        // whileTap={{ scale: 1.1 }}
        // animate={{
        //   x: 650,
        //   y: 400,
        //   backgroundColor: color,
        //   transition: { delay: 0.5, type: "spring", damping: 5 },
        // }}
      ></motion.div>
      <button
        onClick={() => {
          x.set(100);
        }}
      >
        Make it blue
      </button>
    </div>
  );
}

export default App;
