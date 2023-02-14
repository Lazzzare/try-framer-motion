// import { delay, motion, useMotionValue } from "framer-motion";
// import { useState } from "react";
// function App() {
//   const [color, setColor] = useState("red");
//   const x = useMotionValue(0);

//   return (
//     <div>
//       <motion.div
//         className="red-box"
//         style={{ x }}
//         animate={{
//           backgroundColor: color,
//         }}
//         // whileTap={{ scale: 1.1 }}
//         // animate={{
//         //   x: 650,
//         //   y: 400,
//         //   backgroundColor: color,
//         //   transition: { delay: 0.5, type: "spring", damping: 5 },
//         // }}
//       ></motion.div>
//       <button
//         onClick={() => {
//           x.set(100);
//         }}
//       >
//         Make it blue
//       </button>
//     </div>
//   );
// }

// export default App;

import "./styles.css";
import { LoremIpsum } from "./components/LoremIpsum";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";
import { wrap } from "@motionone/utils";

export default function App() {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code>
      </h1>
      <LoremIpsum />
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}
