import { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="header">
      <a className="logo" href="#">
        TodoMaster
      </a>

      <button className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <nav className={`nav ${isSidebarOpen ? "open" : ""}`}>
        <a href="#features" onClick={closeSidebar}>
          Funcionalidades
        </a>
        <a href="#pricing" onClick={closeSidebar}>
          Preços
        </a>
        <a href="#testimonials" onClick={closeSidebar}>
          Depoimentos
        </a>
        <a href="#contact" onClick={closeSidebar}>
          Contato
        </a>
      </nav>

      <a href="#download" className="cta-button top">
        Baixar Agora
      </a>
    </header>
  );
};
