import React from 'react';
import './App.css';

function App() {
  return (
    <div className='body'>
      <header>
        <p className="fisio_website">
          <img src="/imagens/Fisio Website (1).png" alt="" />
        </p>
        <menu>
          <ul>
            <li><a className="home_link" href="#">Home</a></li>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a className="fale_conosco" href="#" style={{ backgroundColor: '#5C7366', color: '#ffffff' }}>Fale conosco</a></li>
          </ul>
        </menu>
      </header>
      <main>
        <section>
          <div id="principal">
            <div className="div1">
              <h1 className="h1_principal">
                Bem-estar físico e mental ao seu alcance
              </h1>
              <p className="p_principal">
                Um espaço multidisciplinar de prevenção e reabilitação feito para quem acredita que cuidar da saúde é sempre a melhor escolha.
              </p>
            </div>
            <div className="div2">
              <img src="/imagens/principal_image.png" alt="" />
            </div>
          </div>
          <div className="content_informacoes">
            <div className="info">
              <h2>Profissionais Capacitados</h2>
              <p>
                com experiência em fisioterapia, psicologia, estética e mais.
              </p>
            </div>
            <div className="info">
              <h2>+20 Tipos de Tratamento</h2>
              <p>
                que devolvem saúde e qualidade de vida.
              </p>
            </div>
            <div className="info">
              <h2>Para todos os Públicos</h2>
              <p>
                crianças, jovens, adultos, gestantes, melhor idade e pessoas com necessidades especiais.
              </p>
            </div>
          </div>
        </section>
        <section id="section02">
          <div className="img">
            <img src="/imagens/image 3.png" alt="" />
          </div>
          <div className="texto_img">
            <h2>O Que é Fisioterapia?</h2>
            <p>
              O fisioterapeuta é o profissional responsável por prevenir, diagnosticar e tratar problemas relacionados às funções e aos movimentos do corpo. Para entender melhor o que faz um fisioterapeuta, não é raro que pessoas que sofreram acidentes ou que apresentam vícios de postura sejam encaminhadas ao profissional.
            </p>
          </div>
        </section>

      <section id="section03">
        <div className="div_titulo">
          <h1 className="especialistas">Somos Especialistas</h1>
          <p className="p_especialistas">
            Sempre buscando o melhor para Atender Você
          </p>
        </div>

        <div className="content_especialidades">
          <div className="content-geral content001">
            <img src="/imagens/Neuromorphismo.png" alt="" />
            <h2 className="h2_espe">Traumato-Ortopedia</h2>
            <p>
              A Traumato-Ortopedia é uma especialidade médica responsável por cuidar,
              tratar e prevenir distúrbios do sistema musculoesquelético, sejam eles
              crônicos ou agudos. Ela ainda tem foco no processo de reabilitação de
              traumas, fraturas, entorses ligamentares, amputações e lesões musculares.
            </p>
          </div>
          <div className="content-geral content002">
            <img src="/imagens/Abordagens.png" alt="" />
            <h2 className="h2_espe">Neurofuncional</h2>
            <p>
              O Serviço de Neurologia e Neurocirurgia possui um amplo espaço de
              fisioterapia e reabilitação aquática, destinado ao tratamento exclusivo
              de pacientes neurológicos adultos e pediátricos. A infraestrutura
              contempla materiais e equipamentos inovadores, garantindo ao paciente,
              conforto, segurança e tranquilidade no atendimento.
            </p>
          </div>
          <div className="content-geral content003">
            <img src="/imagens/Psico.png" alt="" />
            <h2 className="h2_espe">Saúde da Mulher</h2>
            <p>
              Assiste na reabilitação do assoalho pélvico no qual não é abordada de
              forma específica na formação acadêmica, a criação deste curso oferece
              uma visão global do atendimento em patologias e disfunções sexuais
              femininas.
            </p>
          </div>
        </div>
      </section>

      <section id="section04">
        <p>
          ULTRAPASSE SUAS PRÓPRIAS BARREIRAS E ENCORAJA-SE A VIVER UM PROCESSO DE
          AUTOCONHECIMENTO E TRANSFORMAÇÃO. A VIDA É UM PROCESSO, NÃO UM ESTADO DE
          SER. É UMA DIREÇÃO, NÃO UM DESTINO.
        </p>
        <span className="fale_conosco">
          <a href="#">Fale Conosco</a>
        </span>
      </section>

      <section id="section06">
        <h2>O que nossos Pacientes dizem sobre nós?</h2>
        <p style={{ fontSize: '18px' }}>
          "Nestes quase dois anos que pratico a fisioterapia três vezes por semana,
          sinto-me muito bem, pois a Beatriz é uma ótima profissional, muito
          competente, educada e carinhosa."
        </p>
        <p style={{ color: '#2F3C35' }}>Cesar F. K. - Paciente</p>
      </section>
      <footer>
        <div className="logo_footer">
          <img src="/imagens/Fisio Website.png" alt="" />
        </div>
        <div className="contato_footer">
          <p className="p_footer">Marque sua Consulta com a gente</p>
          <p className="p_contato"><img width="20" src="/imagens/FoneGrande.svg" alt="" />(91) 4002-8922</p>
        </div>
      </footer>
      </main>
    </div>
  );
}

export default App;
