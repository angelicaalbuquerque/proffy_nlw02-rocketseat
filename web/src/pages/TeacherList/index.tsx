import React from "react";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars2.githubusercontent.com/u/52754546?s=460&u=beb81a6de4cfbea7677783e3ab2527e30582478d&v=4"
              alt="Victor Emidio"
            />
            <div>
              <strong>Vitor Emidio</strong>
              <span>Introdução à Programação</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias para desenvolvimento web.
            <br />
            <br />
            Apaixonado por aprender e ensinar, transformar wireframes em
            realidade e fazer com que meus alunos avancem para o próximo nível
            profissional.
          </p>

          <footer>
            <p>
              Preço/hora:
              <strong>R$50,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
