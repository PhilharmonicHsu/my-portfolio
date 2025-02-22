import {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function GoTop() {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.scrollY > 300);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-10 bg-white text-white p-3 rounded-full shadow-lg cursor-pointer transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showButton ? 1 : 0, scale: showButton ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowUp size={24} color='black' />
        </motion.button>
    );
}