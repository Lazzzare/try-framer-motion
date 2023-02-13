import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <motion.div className="red-box" animate={{ x: 100, y: 300 }}></motion.div>
    </div>
  );
}

export default App;
