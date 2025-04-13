import "./Pricing.css";

export const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <h2>Escolha o plano ideal pra você</h2>
      <p className="pricing-subtitle">
        Planos simples e acessíveis, sem surpresas.
      </p>

      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Gratuito</h3>
          <p className="price">R$0/mês</p>
          <ul>
            <li>✓ Tarefas ilimitadas</li>
            <li>✓ Organização por listas</li>
            <li>✓ Tema claro/escuro</li>
          </ul>
          <button>Começar grátis</button>
        </div>

        <div className="pricing-card destaque">
          <h3>Pro</h3>
          <p className="price">R$19,90/mês</p>
          <ul>
            <li>✓ Tudo do Gratuito</li>
            <li>✓ Colaboração em tempo real</li>
            <li>✓ Backup automático</li>
            <li>✓ Suporte prioritário</li>
          </ul>
          <button>Assinar agora</button>
        </div>
      </div>
    </section>
  );
};
