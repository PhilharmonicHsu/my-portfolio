import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from '@components/ContactForm';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
    const contactRef = useRef(null);
    const contactTitleRef = useRef(null);
    
    useEffect(() => {
        const contactTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse", // 定義進入與離開的動作
            },
        });
    
        contactTimeline.fromTo(
            contactTitleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        )
    }, []);

    return <section id="contact" ref={contactRef} className="pt-20 sm:px-10 px-1 text-center">
        <h2 ref={contactTitleRef} className="text-4xl font-bold text-white">Contact Me</h2>
        <ContactForm />
    </section>
}