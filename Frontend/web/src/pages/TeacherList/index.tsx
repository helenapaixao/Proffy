import React from "react";
import Header from "../../components/PageHeader";
import "./styles.css";
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>
      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/11083288?s=460&u=3548efa4b019bb0c4041dfdeeff5f510bbcce99e&v=4" alt="Helena Paixão" />
            <div>
              <strong>Helena Paixão</strong>
              <span>Quimica</span>
            </div>
          </header>
            <p>
              Entusiasta das melhores tecnologias
            </p>
            <footer>
              <p>
                Preço/hora
                <strong>R$ 80,00</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="whats"/>
                Entrar em contato

              </button>
            </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
