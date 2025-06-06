import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/all';
import { motion } from "framer-motion";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";

gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
    const jobTitle1 = useRef(null);
    const jobTitle2 = useRef(null)
    const heroRef = useRef(null);
    const heroLeftRef = useRef(null);
    const heroRightRef = useRef(null);

    useEffect(() => {
      gsap.to(jobTitle1.current, {
          duration: 2.5,
          text: "Tech Lead",
          ease: "none",
          repeat: -1,
          yoyo: true,
          repeatDelay: 1,
      });
    }, []);

    useEffect(() => {
      gsap.to(jobTitle2.current, {
          duration: 2.5,
          text: "Full-Stack Developer",
          ease: "none",
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.9,
      });
    }, [])

    return <section ref={heroRef} className="sm:h-screen h-auto flex flex-col lg:flex-row justify-center items-center text-center md:px-[6rem] px-[2rem]">
      <img
        src="/avatar.webp"
        alt="avatar preload"
        width={1}
        height={1}
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
        loading="eager"
        decoding="async"
      />
    <div ref={heroLeftRef} className="lg:w-1/2 w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-white">
        Hey there, I'm 
      </h1>
      <motion.h1
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Phil
      </motion.h1>

      <div
        className="w-auto h-[400px] lg:hidden my-4"
      >
        <motion.img 
          src="/avatar.webp" 
          alt="avatar" 
          className="w-full h-full object-cover solid border-2" 
          animate={{ 
            y: [0, 10, 0],
            borderTopLeftRadius: ["60%", "40%", "60%"],
            borderTopRightRadius: ["60%", "50%", "40%", "60%"],
            borderBottomRightRadius: ["50%", "40%", "60%", "50%"],
            borderBottomLeftRadius: ["55%", "60%", "30%", "55%"],
          }}
          loading="eager"
          decoding="async"
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      <h2 ref={jobTitle1} className="text-2xl text-white mt-4 h-8"></h2>
      <h2 ref={jobTitle2} className="text-2xl text-white h-8"></h2>
      <motion.p
        className="mt-4 text-lg text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 1 }}
      >
        I’m passionate about crafting innovative digital solutions and leading teams to build robust, scalable web applications. Whether I'm debugging code or dreaming up the next big idea, I bring creativity and precision to every project.
      </motion.p>
      <motion.a
        href="/resume.pdf"
        download
        className="w-[300px] flex justify-center items-center mt-6 px-6 py-3 bg-white text-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition transform hover:scale-110"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <FiDownload /> Download Resume
      </motion.a>
    </div>
    <div ref={heroRightRef} className="w-1/2 justify-center lg:flex hidden">
      <div
        className="w-[1/2] h-[400px]"
      >
        <motion.img 
          animate={{ 
            y: [0, 10, 0],
            borderTopLeftRadius: ["60%", "40%", "60%"],
            borderTopRightRadius: ["60%", "50%", "40%", "60%"],
            borderBottomRightRadius: ["50%", "40%", "60%", "50%"],
            borderBottomLeftRadius: ["55%", "60%", "30%", "55%"],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          src="/avatar.webp" 
          alt="avatar" 
          className="w-full h-full object-cover solid border-2" 
          loading="eager" 
          decoding="async"
        />
      </div>
    </div>
  </section>
}