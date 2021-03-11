<template>
  <div>
    <nav id="navbar">
      <img src="../assets/images/onit-logo.png" />
      <div>
        <router-link to="/" class="links">Home</router-link>
        <router-link to="/talentmoz" class="links">Tech Talent Moz</router-link>
        <button class="links">Cadastrar-se para o TIM</button>
      </div>
    </nav>
    <div id="wellcome">
      <div>
        <h1>Bem Vindo ao ONIT</h1>
        <div class="well-div">
          <div class="img-container">
            <img src="../assets/images/explore.png" class="imagem" />
          </div>
          <div>
            <p class="subtitulo">Talks e Eventos</p>
            <p>Tenha acesso a varios eventos e Talks organizados pela ONIT</p>
          </div>
        </div>
        <div class="well-div">
          <div class="img-container">
            <img src="../assets/images/card-favorite.png" class="imagem" />
          </div>
          <div>
            <p class="subtitulo">Junta te a nossa Comunidade</p>
            <p class="well-body">
              Acede a nosssa Comunidade de talentos e Inovadores
            </p>
          </div>
        </div>
        <div class="well-div">
          <div class="img-container">
            <img src="../assets/images/interview.png" class="imagem" />
          </div>
          <div>
            <p class="subtitulo">Tenha acesso a Projectos Interessantes</p>
            <p>
              Trabalhe com Projectos Interessantes para melhorar as suas
              Capacidades
            </p>
          </div>
        </div>
      </div>

      <img src="../assets/images/wellcome.png" id="img" />
    </div>
    <div id="icc">
      <p>Inovação</p>
      <div class="slash"></div>
      <p>Colaboração</p>
      <div class="slash"></div>
      <p>Crescimento</p>
    </div>
    <div id="about-onit">
      <p>A ONIT é um projecto com o objectivo de:</p>
      <p>
        Criar a maior Comunidade Africana de Inovadores, Startups e
        empreendedores digitais.
      </p>
    </div>

    <div id="cards">
      <card title="Mentoria" body="Acede a Mentoria de experts que vão guiar e fazer o acompanhamento constante" 
      icon="../assets/images/node.svg"/>
      <card title="Cursos Pagos" body="Cursos pagos de programação, Front End, DevOps, Mobile, UX Design e muito Mais"
       icon="../assets/images/msg.svg"/>
      <card title="Projectos" body="Uma lista de projectos interessantes para a melhoria das capacidades individuais"
       icon="../assets/images/chat.svg"/>
    </div>

    <div id="eventos">
      <div id="ec">
        <h2>Eventos e Conferencias</h2>
        <button>Veja todos 15 Eventos</button>
      </div>
      <div id="evento-card">
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
      </div>
    </div>

    <div id="subscriber">
      <img src="../assets/images/evento.png" />
      <div>
        <p>Junta-te a nossa comunidade</p>
        <h2>Receba alerta instatâneo no seu Email</h2>
        <p>
          Assine o nosso boletim informativo e receba um alerta instantâneo de
          eventos e mais oportunidades na sua caixa de entrada para se inscrever
        </p>
        <div id="subscribe-input">
          <FontAwesomeIcon icon="envelope" />
          <input type="text" placeholder="Escreve o seu Email" />
          <button>Subscrever</button>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Evento from "../components/Evento";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Footer from '../components/Footer';
import Card from '../components/Card';
export default {
  components: {
    Evento,
    FontAwesomeIcon,
    Footer,
    Card,
  },
};
</script>

<style lang="css" scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  margin: 1rem 5vw;
  height: 8rem;
}

#navbar img {
  margin-top: 3.1rem;
}

.links {
  margin-right: 4.7rem;
  margin-top: 4.6rem;
  text-decoration: none;
  font-size: 16px;
  line-height: 28px;
  text-align: right;
  color: #1d293f;
}

.links:first-child {
  font-weight: bold;
}

.links:last-child {
  margin-top: 36px;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  text-align: center;

  color: #e9f7fe;
  background: #0f53fa;
  border-radius: 5px;
  height: 45px;
  width: 189px;
  border: none;
}

#wellcome {
  display: flex;
  justify-content: center;
}

#wellcome div {
  margin-right: 55px;
}

#wellcome div h1 {
  margin-bottom: 55px;
  font-weight: bold;
  font-size: 58px;
  line-height: 64px;
  letter-spacing: -1px;
  color: #1d293f;
}

.imagem {
  width: 36px;
  height: 36px;
}
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 83px;
  box-sizing: border-box;
  border: 1px solid #e2e4e8;
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 31px;
}

.subtitulo {
  font-weight: 700;
  font-size: 21px;
  line-height: 34px;
  color: #1d293f;
}

.well-div {
  display: flex;
  margin-bottom: 40px;
}

.well-div {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #7c8087;
}

#icc {
  display: flex;
  justify-content: center;
  margin-top: 217px;
}

#icc p {
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.827586px;
  color: #1d293f;
}

#about-onit {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 14px;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  text-align: center;

  color: #7c8087;
}

.slash {
  border: solid 2px#1d293f;
  margin: 0 10px;
  height: 25px;
  margin-top: 15px;
}

#ec {
  display: flex;
  justify-content: space-between;
  margin-bottom: 73px;
}

#ec h2 {
  font-weight: 500;
  font-size: 58px;
  line-height: 64px;
  /* or 110% */

  letter-spacing: -1px;

  color: #1d293f;
}

#ec button {
  width: 193px;
  height: 65px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  background: #22b0fc;
  color: white;
  border: none;
}

#eventos {
  background: #f7f8fa;
  margin-top: 107px;
  padding: 245px;
}

#evento-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#subscriber {
  display: flex;
  justify-content: center;
  padding: 10vw;
}

#subscriber img {
  width: 639px;
  height: 688px;
}

#subscriber div {
  width: 680px;
}

#subscriber div p:first-child {
  font-size: 16px;
  line-height: 20px;
  color: #f77321;
}

#subscriber div h2 {
  font-family: Circular Std;
  font-style: normal;
  font-weight: 500;
  font-size: 58px;
  line-height: 64px;
  /* or 110% */

  letter-spacing: -1px;
  color: #1d293f;
}

#subscriber div h2 + p {
  font-family: CircularStd;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  color: #7c8087;
}

#subscribe-input {
  height: 107px;
}

#subscribe-input input {
  height: 107px;
  border: none;
  width: 25rem;

  font-family: Circular Std;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  color: #8c97ac;
}

#subscribe-input button {
  width: 160px;
  height: 107px;
  color: white;
  border: none;
  background: #22b0fc;
  margin-top: 63px;
}

#subscribe-input svg {
  color: #7c8087;
  margin-right: 5px;
}

#cards{
  display: flex;
  justify-content: center;
}
</style>