import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import avatar from '@assets/avatar.jpeg'

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
    
        gsap.to(jobTitle2.current, {
            duration: 2.5,
            text: "Full-Stack Developer",
            ease: "none",
            repeat: -1,
            yoyo: true,
            repeatDelay: 0.9,
        });

        gsap.fromTo(
            heroRightRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
          )
    }, []);

    return <section ref={heroRef} className="sm:h-screen h-auto flex flex-col lg:flex-row justify-center items-center text-center md:px-[6rem] px-[2rem]">
    <div ref={heroLeftRef} className="lg:w-1/2 w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-white">
        Hey there, I'm 
      </h1>
      <motion.h1
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Phil
      </motion.h1>

      <motion.div
        className="w-auto h-[400px] shadow-lg overflow-hidden solid border-2 lg:hidden my-4"
        animate={{ 
          y: [0, 10, 0],
          borderTopLeftRadius: ["60%", "40%", "60%"],
          borderTopRightRadius: ["60%", "50%", "40%", "60%"],
          borderBottomRightRadius: ["50%", "40%", "60%", "50%"],
          borderBottomLeftRadius: ["55%", "60%", "30%", "55%"],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
      </motion.div>

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
        transition={{ delay: 1, duration: 0.5 }}
      >
        <FiDownload /> Download Resume
      </motion.a>
    </div>
    <div ref={heroRightRef} className="w-1/2 justify-center lg:flex hidden">
      <motion.div
        className="w-[1/2] h-[400px] shadow-lg overflow-hidden solid border-2"
        animate={{ 
          y: [0, 10, 0],
          borderTopLeftRadius: ["60%", "40%", "60%"],
          borderTopRightRadius: ["60%", "50%", "40%", "60%"],
          borderBottomRightRadius: ["50%", "40%", "60%", "50%"],
          borderBottomLeftRadius: ["55%", "60%", "30%", "55%"],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  </section>
}