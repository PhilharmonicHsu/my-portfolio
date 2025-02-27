import { useEffect, useRef, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {Projects} from '@constants'

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
    const projectsRef = useRef(null);
    const projectsTitleRef = useRef(null);
    const projectsContantRef = useRef(null);
    const [projectInfo, setProjectInfo] = useState(Projects[0]);

    useEffect(() => {
        const projectsTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top center",
              end: "bottom center",
              toggleActions: "play reverse play reverse", // 定義進入與離開的動作
            },
        });
      
        projectsTimeline.fromTo(
            projectsTitleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        )
          
        projectsTimeline.fromTo(
            projectsContantRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            0
        )
    }, [])

    const handleSwiperChange = (swiper) => {
        setProjectInfo(Projects[swiper.activeIndex])
    }

    return <section id="projects" ref={projectsRef} className="py-20 px-10 max-w-6xl mx-auto">
        <h2 ref={projectsTitleRef} className="text-4xl font-bold text-white text-center">Projects</h2>
        <div ref={projectsContantRef}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col my-4">
                <Swiper 
                spaceBetween={20} 
                slidesPerView={1} 
                loop={false} 
                navigation={true}
                modules={[Navigation]}
                className="w-full max-w-4xl"
                onSlideChange={(swiper) => handleSwiperChange(swiper)}
                >
                {Projects.map((project, index) => (
                    <SwiperSlide key={index} className="sm:p-4 p-0 flex!  justify-center items-center">
                        <img src={project.image} alt={project.title} className="sm:w-auto sm:h-[300px] h-auto object-contain rounded-md mb-4" />
                    </SwiperSlide>
                ))}
                </Swiper>
                <h3 className="text-2xl font-semibold text-white text-center">{projectInfo.title}</h3>
                <p className="mt-2 text-gray-400 h-auto">{projectInfo.description}</p>
                <div className="flex justify-between mt-6 gap-2">
                    <a href={projectInfo.github} target="_blank" className="text-gray-300 hover:text-white flex items-center gap-2">
                    <FaGithub size={30} /> <span className='hidden md:block'>GitHub</span> 
                    </a>
                    <div className="flex flex-wrap justify-center gap-4 p-1 rounded-md">
                    {projectInfo.skills.map((SkillIcon, i) => (
                        <SkillIcon key={i} width={30} height={30} className="text-3xl text-white" />
                    ))}
                    </div>
                    <a href={projectInfo.website} target="_blank" className="text-gray-300 hover:text-white flex items-center gap-2">
                    <FiExternalLink size={25} /> <span className='hidden md:block'>Live Demo</span> 
                    </a>
                </div>
            </div>
        </div>
    </section>
}