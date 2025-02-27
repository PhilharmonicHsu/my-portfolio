import { useRef, useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const aboutRef = useRef(null);
    const aboutTitleRef = useRef(null);
    const aboutDescRef = useRef(null);

    useEffect(() => {
        const aboutTl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutTitleRef.current,
                start: "bottom bottom",
                end: "top top",
                toggleActions: "play reverse play reverse", // 定義進入與離開的動作
            },
        });
    
        aboutTl.fromTo(
            aboutTitleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
    
        aboutTl.fromTo(
            aboutDescRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            0
        )
    }, []) 

    return <section ref={aboutRef} id="about" className="pt-20 px-10 max-w-4xl mx-auto">
        <h2 ref={aboutTitleRef} className="text-4xl font-bold text-white text-center">About Me<span>👨‍💻</span></h2>
        <p ref={aboutDescRef} className="mt-4 sm:text-xl text-white text-center max-w-3xl leading-relaxed">
        Hey, I’m Phil! 
        I’m an introverted yet ambitious backend developer who enjoys solving complex problems, writing clean code and occasionally overthinking life at sunset. <br/>
        Originally from Taiwan, now in Vancouver, expanding my skills in <strong>React</strong> and <strong>TypeScript</strong> while building cool projects. 
        I love <strong>Structure</strong> and <strong>Logic</strong>, but I’m also curious about creativity and human interaction <em>(yes, even for an introvert)</em>. <br/>
        If you’re into tech, deep conversations or just need someone to debug your bad jokes
        — I’m your guy!
        </p>
    </section>
}