import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">TodoMaster</div>

        <nav className="footer-links">
          <a href="#features">Funcionalidades</a>
          <a href="#pricing">Preços</a>
          <a href="#testimonials">Depoimentos</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 TodoMaster. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
