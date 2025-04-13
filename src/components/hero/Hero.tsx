import "./Hero.css";
import imgPreview from "../../assets/hero-img.png";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Organize suas tarefas com facilidade</h1>
        <p className="hero-subtitle">
          TodoMaster é o app ideal para gerenciar seu dia a dia com agilidade e
          clareza. Simples, rápido e gratuito.
        </p>
        <a href="#download" className="hero-cta">
          Comece Agora
        </a>
      </div>

      <div className="hero-image">
        <img src={imgPreview} alt="App Preview" />
      </div>
    </section>
  );
};
