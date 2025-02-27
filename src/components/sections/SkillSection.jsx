import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from '@components/Skills';
import { FrontendSkills, BackendSkills, DevOpsSkills, OtherSkills } from '@constants'

gsap.registerPlugin(ScrollTrigger);

export default function SkillSection() {
    const skillsRef = useRef(null);
    const skillsTitleRef = useRef(null);

    useEffect(() => {
        const skillsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: skillsRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse", // 定義進入與離開的動作
            },
        })
    
        skillsTimeline.fromTo(
            skillsTitleRef.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        )
    }, [])

    return <section id="skills" ref={skillsRef} className="pt-20 px-10 max-w-6xl mx-auto">
        <h2 ref={skillsTitleRef} className="text-4xl font-bold text-white text-center">Skills</h2>
        <Skills title="Frontend" skills={FrontendSkills} direction="left" />
        <Skills title="Backend" skills={BackendSkills} />
        <Skills title="DevOps" skills={DevOpsSkills} direction="left" />
        <Skills title="Others" skills={OtherSkills} />
    </section>
}