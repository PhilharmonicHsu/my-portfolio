import { slide as Menu } from "react-burger-menu";
import './BurgerMenu.css'
import {scrollToSection} from '../utils/common'

export default function BurgerMenu({menuOpen, setMenuOpen}) {
  const handleClickSection = (id) => {
    scrollToSection(id)
    setMenuOpen(false);
  }

  return (
    <Menu 
      isOpen={menuOpen} 
      onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
      customBurgerIcon={false} 
      right
    >
      <a className="menu-item" onClick={() => handleClickSection("about")}>About Me</a>
      <a className="menu-item" onClick={() => handleClickSection("skills")}>Skills</a>
      <a className="menu-item" onClick={() => handleClickSection("projects")}>Projects</a>
      <a className="menu-item" onClick={() => handleClickSection("contact")}>Contact Me</a>
    </Menu>
  );
};
