import { useState } from "react";
import "../Nabvar/navbarMain.css";
import { Link as Anchor } from "react-router-dom";

function NavbarMain() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-navbar-inicio">
      <div className="logo">
        <Anchor to="/">
          <img src="Netflix-new-icon.png" alt="" />
        </Anchor>
      </div>
      <div className="container-links">
        <ul>
          <li>
            <Anchor to={"/"}>Inicio</Anchor>
          </li>
          <li>
          <Anchor to={"/movies"}>Peliculas</Anchor>
          </li>
          <li>
          <Anchor to={"/series"}>Series</Anchor>
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
      <button onClick={toggleMenu} className="menu-button">
        ☰
      </button>
      {isOpen && (
        <div className="menu-dropdown">
           <Anchor to={"/"}>
          Inicio
        </Anchor>
        <Anchor to={"/movies"}>
          Peliculas
        </Anchor>
        <Anchor to={"/series"}>
          Series
        </Anchor>
        </div>
      )}
    </div>
    </div>
  );
}

export default NavbarMain;
