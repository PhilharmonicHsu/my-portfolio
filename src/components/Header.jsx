import {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import RotationIcon from './RotationIcon';

export default function Header() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return <motion.header
      className="fixed top-0 left-0 w-full z-50 py-3 backdrop-blur-md transition-all duration-300"
      style={{ backgroundColor: `rgba(68, 64, 60, ${Math.max(0.9 - (scrollY / 300), 0)})` }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <RotationIcon />
        <nav className="flex gap-6">
          <button onClick={() => scrollToSection("about")} className="cursor-pointer">About Me</button>
          <button onClick={() => scrollToSection("skills")} className="cursor-pointer">Skills</button>
          <button onClick={() => scrollToSection("projects")} className="cursor-pointer">Projects</button>
          <button onClick={() => scrollToSection("contact")} className="cursor-pointer">Contact Me</button>
        </nav>
      </div>
    </motion.header>
}