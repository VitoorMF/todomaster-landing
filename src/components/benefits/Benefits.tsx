import "./Benefits.css";

export const Benefits = () => {
  return (
    <section className="benefits" id="features">
      <h2 className="benefits-title">Por que usar o TodoMaster?</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <h3>Interface Intuitiva</h3>
          <p>
            Navegue facilmente e organize suas tarefas em segundos com um layout
            simples e moderno.
          </p>
        </div>
        <div className="benefit-card">
          <h3>Sincronização Instantânea</h3>
          <p>
            Suas tarefas atualizadas em tempo real entre computador e celular,
            sem complicações.
          </p>
        </div>
        <div className="benefit-card">
          <h3>Notificações Inteligentes</h3>
          <p>
            Receba alertas personalizados para manter seus compromissos sempre
            em dia.
          </p>
        </div>
      </div>
    </section>
  );
};
