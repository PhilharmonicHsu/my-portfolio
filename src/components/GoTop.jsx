import {useState, useEffect, useCallback, useMemo} from 'react';
import { motion } from "framer-motion";
import {FiArrowUp} from "@react-icons/all-files/fi/FiArrowUp";

export default function GoTop() {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    })

    useEffect(() => {
      let timeout;

      const handleScroll = () => {
        clearTimeout(timeout);

        timeout = window.setTimeout(() => {
          setShowButton(window.scrollY > 300);
        }, 100);
      };
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        clearTimeout(timeout)
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);
  
    const button = useMemo(() => (
      <motion.button
        aria-label="Go top"
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-white text-white p-3 rounded-full shadow-lg cursor-pointer transition"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showButton ? 1 : 0, scale: showButton ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <FiArrowUp size={24} color="black" />
      </motion.button>
    ), [scrollToTop, showButton]);

    return showButton ? button : <></>;

    // return (
    //     <motion.button
    //       aria-label="Go top"
    //       onClick={scrollToTop}
    //       className="fixed bottom-10 right-10 bg-white text-white p-3 rounded-full shadow-lg cursor-pointer transition"
    //       initial={{ opacity: 0, scale: 0.8 }}
    //       animate={{ opacity: showButton ? 1 : 0, scale: showButton ? 1 : 0.8 }}
    //       transition={{ duration: 0.3 }}
    //     >
    //       <FiArrowUp size={24} color='black' />
    //     </motion.button>
    // );
}