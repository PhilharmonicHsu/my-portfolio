import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Skills({title, skills, direction='right'}) {
    const sectionRef = useRef(null)
    const titleRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
      const position = direction === 'right' ? -100 : 100;

      const skillsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "+=1000",
          toggleActions: "play reverse play reverse",
        },
      })
  
      skillsTimeline.fromTo(
        titleRef.current,
        { opacity: 0, x: position },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      )

      skillsTimeline.fromTo(
        skillsRef.current,
        { opacity: 0, x: -position },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        0
      )
    }, [])

    const skillsAnimation = (index) => {
      const startPoint = (index%3 === 1) ? 5 : -5;

      return { y: [0, startPoint, 0], transition: { repeat: Infinity, duration: 2 } }
    }

    return <div ref={sectionRef}>
        <h3 ref={titleRef} className='text-2xl font-bold text-white text-center my-4'>{title}</h3>
        <div ref={skillsRef} className="grid sm:grid-cols-5 grid-cols-3 gap-6 my-6 text-gray-300 text-4xl flex flex-wrap justify-center">
          {skills.map((Icon, index) => (
            <motion.div
              key={index}
              className="p-4 flex justify-center group"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              animate={skillsAnimation(index)}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
    </div>
}