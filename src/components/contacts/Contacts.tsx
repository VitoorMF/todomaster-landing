import "./Contacts.css";

export const Contacts = () => {
  return (
    <section className="contacts" id="contact">
      <h2>Entre em Contato</h2>
      <p>Fale com a gente para dúvidas, sugestões ou parcerias.</p>

      <form className="contact-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar mensagem</button>
      </form>
    </section>
  );
};
