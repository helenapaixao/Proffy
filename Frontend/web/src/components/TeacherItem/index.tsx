import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/11083288?s=460&u=3548efa4b019bb0c4041dfdeeff5f510bbcce99e&v=4"
          alt="Helena Paixão"
        />
        <div>
          <strong>Helena Paixão</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>Entusiasta das melhores tecnologias</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whats" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
