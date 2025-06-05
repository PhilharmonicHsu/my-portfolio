import { slide as Menu } from "react-burger-menu";
import './BurgerMenu.css'

export default function BurgerMenu({menuOpen, setMenuOpen}) {
  const handleClickSection = () => {
    setMenuOpen(false);
  }

  return (
    <Menu 
      isOpen={menuOpen} 
      onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
      customBurgerIcon={false} 
      right
    >
      <a className="menu-item" href="/#about" onClick={() => handleClickSection("about")}>About Me</a>
      <a className="menu-item" href="/#skills" onClick={() => handleClickSection("skills")}>Skills</a>
      <a className="menu-item" href="/#projects" onClick={() => handleClickSection("projects")}>Projects</a>
      <a className="menu-item" href="/#contact" onClick={() => handleClickSection("contact")}>Contact Me</a>
    </Menu>
  );
};
