import {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import RotationIcon from './RotationIcon';
import {scrollToSection} from '@utils/common'
import personSchema from '@lib/person-schema.json'
import websiteSchema from '@lib/website-schema.json'
import softwareSourceCodeSchema from '@lib/software-source-code-schema.json'

export default function Header({setMenuOpen}) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <motion.header
      className="fixed top-0 left-0 w-full z-50 py-3 backdrop-blur-md transition-all duration-300"
      style={{ backgroundColor: `rgba(68, 64, 60, ${Math.max(0.9 - (scrollY / 300), 0)})` }}
    >
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSourceCodeSchema),
          }}
        />
      </Helmet>
      <div className="flex justify-between items-center px-6">
        <RotationIcon />
        <nav className="md:flex hidden gap-6">
          <button onClick={() => scrollToSection("about")} className="cursor-pointer">About Me</button>
          <button onClick={() => scrollToSection("skills")} className="cursor-pointer">Skills</button>
          <button onClick={() => scrollToSection("projects")} className="cursor-pointer">Projects</button>
          <button onClick={() => scrollToSection("contact")} className="cursor-pointer">Contact Me</button>
        </nav>
        <button className="md:hidden btn btn-square btn-ghost cursor-pointer" onClick={() => setMenuOpen(true)}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21M3 12H21M3 18H21" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </motion.header>
}