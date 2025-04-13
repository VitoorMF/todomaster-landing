import "./Testimonials.css";

export const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">O que dizem nossos usuários</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>
            "O TodoMaster me ajudou a manter meu dia muito mais organizado. Não
            vivo mais sem!"
          </p>
          <span className="user-name">— Ana Paula, freelancer</span>
        </div>
        <div className="testimonial-card">
          <p>
            "Simples de usar e muito funcional. As notificações são um
            diferencial!"
          </p>
          <span className="user-name">— João Marcos, estudante</span>
        </div>
        <div className="testimonial-card">
          <p>
            "Uso tanto no celular quanto no PC. A sincronização é perfeita,
            nunca perdi uma tarefa."
          </p>
          <span className="user-name">— Carla Mendes, gerente de projetos</span>
        </div>
      </div>
    </section>
  );
};
