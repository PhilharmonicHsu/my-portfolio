import {useState} from 'react';
import Header from '@components/Header';
import BurgerMenu from '@components/BurgerMenu.jsx';
import HeroSection from '@components/sections/HeroSection.jsx';
import AboutSection from '@components/sections/AboutSection.jsx';
import SkillSection from '@components/sections/SkillSection.jsx';
import ProjectSection from '@components/sections/ProjectSection.jsx';
import GoTop from '@components/GoTop'
import ContactSection from '@components/sections/ContactSection.jsx';
import Footer from '@components/Footer.jsx';
import VantaBackground from '@components/VantaBackground';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <VantaBackground>
      <div className="text-white font-sans lg:pt-0 pt-[5rem] text-nunito">
        <Header setMenuOpen={setMenuOpen} />
        <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
        <GoTop />
        <Footer />
      </div>
    </VantaBackground>
  );
};

export default App;