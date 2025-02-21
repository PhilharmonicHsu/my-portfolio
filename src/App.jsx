import {useRef, useEffect} from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import avatar from '/src/assets/avatar.jpeg'
import greenIsland from '/src/assets/portfolios/green-island.png'
import cartoonist from '/src/assets/portfolios/cartoonist.png'
import emotionGallery from '/src/assets/portfolios/emotion-gallery.png'
import netphlix from '/src/assets/portfolios/netphlix.png'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import * as Icon from "./components/icons/Icons";
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const FrontendSkills = [
  Icon.Js, Icon.Ts, Icon.BootStrap, Icon.Jest, Icon.Next, Icon.React, Icon.Vue, Icon.TailwindCss, Icon.ThreeJs
]

const BackendSkills = [
  Icon.PHP, Icon.Laravel, Icon.Golang, Icon.MySQL, Icon.PostgreSQL, Icon.Redis, Icon.Pest, Icon.Rpc, Icon.JavaSpring, Icon.OpenAI
]

const DevOpsSkills = [
  Icon.Gitlab, Icon.Grafana, Icon.Elastic, Icon.Supabase, Icon.Render
]

const OtherSkills = [
  Icon.Git, Icon.Docker, Icon.Kubernetes, Icon.YouTrack
]

const Projects = [
  {
    title: 'Green Island',
    image: greenIsland,
    description: 'Green Island is a modern real-time chat and video call platform that prioritizes privacy and security. Imagine stepping onto a secluded island where conversations disappear once you leave—just like a peaceful getaway.',
    skills: [
      Icon.Next, Icon.TailwindCss, Icon.PostgreSQL
    ],
    github: 'https://github.com/PhilharmonicHsu/green-island',
    website: 'https://green-island-client.onrender.com'
  },
  {
    title: 'Cartoonist',
    image: cartoonist,
    description: 'A cutting-edge web application that empowers users to unleash their creativity and bring their stories to life in a visually stunning comic format. Designed with a seamless user experience and modern technologies, this platform bridges storytelling and technology to deliver an interactive and intuitive environment for creating, editing, and sharing comics.',
    skills: [
      Icon.React, Icon.Js, Icon.Laravel, Icon.TailwindCss, Icon.PostgreSQL, Icon.Pest
    ],
    github: 'https://github.com/PhilharmonicHsu/cartoonist',
    website: '#'
  },
  {
    title: 'Emotion Gallery',
    image: emotionGallery,
    description: 'Users can upload their own pictures or images in this web application, we will analyze them and then display the analysis results to users so that users can understand the emotions and meanings brought by the pictures.',
    skills: [
      Icon.Laravel, Icon.TailwindCss, Icon.PostgreSQL, Icon.Pest
    ],
    github: 'https://github.com/PhilharmonicHsu/emotion-gallery',
    website: 'https://emotion-gallery-5891731146c3.herokuapp.com/'
  },
  {
    title: 'Netphlix',
    image: netphlix,
    description: 'A sleek and modern web application built with React that allows users to browse, search, and explore movies using the TMDB API. This project incorporates key design patterns, including Builder and Singleton, to enhance scalability and maintainability.',
    skills: [
      Icon.React, Icon.Js
    ],
    github: 'https://github.com/PhilharmonicHsu/netphlix',
    website: '#'
  },
]

gsap.registerPlugin(TextPlugin);

const App = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      duration: 4,
      text: "Tech Lead | Full-Stack Developer | Creative Problem Solver",
      ease: "none",
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-sky-300 to-stone-700 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-row justify-center items-center text-center px-4">
        <div className="w-1/2 flex flex-col justify-center items-center">
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
          <h2 ref={textRef} className="text-2xl text-white mt-4 h-8"></h2>
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
        <div className="w-1/2 flex justify-center">
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

      {/* About Me */}
      <section className="py-20 px-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">About Me</h2>
        <p className="mt-4 text-xl text-white text-center">
          Hey, I’m Phil! 
          I’m an introverted yet ambitious backend developer who enjoys solving complex problems, writing clean code and occasionally overthinking life at sunset. <br/>
          Originally from Taiwan, now in Vancouver, expanding my skills in <strong>React</strong> and <strong>TypeScript</strong> while building cool projects. 
          I love <strong>Structure</strong> and <strong>Logic</strong>, but I’m also curious about creativity and human interaction <em>(yes, even for an introvert)</em>. <br/>
          If you’re into tech, deep conversations or just need someone to debug your bad jokes
          — I’m your guy!
        </p>
      </section>

      {/* Skills */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">Skills</h2>
        <Skills title="Frontend" skills={FrontendSkills} />
        <Skills title="Backend" skills={BackendSkills} />
        <Skills title="DevOps" skills={DevOpsSkills} />
        <Skills title="Others" skills={OtherSkills} />
      </section>

      {/* Projects */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">Projects</h2>
        <Swiper 
          spaceBetween={20} 
          slidesPerView={1} 
          loop={false} 
          navigation={true}
          modules={[Navigation]}
          className="w-full max-w-4xl"
        >
          {Projects.map((project, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <img src={project.image} alt={project.title} className="w-auto h-auto object-contain rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-400 h-[100px]">{project.description}</p>
                <div className="flex justify-between mt-6">
                  <a href={project.github} target="_blank" className="text-gray-300 hover:text-white flex items-center gap-2">
                    <FaGithub size={30} /> GitHub
                  </a>
                  <div className="flex justify-center gap-4">
                    {project.skills.map((SkillIcon, i) => (
                      <SkillIcon key={i} className="text-3xl text-white" />
                    ))}
                  </div>
                  <a href={project.website} target="_blank" className="text-gray-300 hover:text-white flex items-center gap-2">
                    <FiExternalLink size={25} /> Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contact */}
      <section className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold text-white">Contact Me</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default App;
