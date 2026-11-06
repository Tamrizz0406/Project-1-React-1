// src/components/Header/Header.tsx
import "./Header.css";
import logo from "../../assets/Logo(3).png";
import icon from "../../assets/Icon.png";


function Header() {
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="Logo" />
      <div className="page">
        <p>Início</p>
        <p>Sobre</p>
        <p>Serviços</p>
        <p>Depoimentos</p>
        <p>Contato</p>
      </div>
        <img className="bar" src={icon} alt="Icon" />
    </nav>
  );
}

export default Header;