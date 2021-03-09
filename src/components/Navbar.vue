<template>
  <nav>
    <div class="navbar">
      <img class="nada" src="./../assets/nada.png" />
      <div class="input">
        <div></div>
        <input type="text" placeholder="Procurar" />
      </div>
      <button class="btn" @click="autoHide">Filtrar</button>
      <img class="logo" src="./../assets/onit-logo.png" />
    </div>
    <div class="filtros" :style="''">
      <div class="onit">
        <p id="onit">ONIT</p>
        <div id="triangulo"></div>
        <p id="ttm">Tech Talent Moz</p>
      </div>
      <div class="dropbox-container" :style="hide">
        <select class="dropbox">
          <option>Disponibilidade</option>
        </select>
        <select class="dropbox">
          <option>Taxa por Hora</option>
        </select>
        <select class="dropbox">
          <option>Skills</option>
        </select>
      </div>
    </div>
    <div></div>
  </nav>
</template>

<script>
export default {
    data(){
        return {
            hide: "display: none"
        }
    },
    methods: {
        autoHide : function(){
            if(this.hide==="display: none"){
                this.hide = "";
            }else{
                this.hide="display: none";
            }
        }
    }
};
</script>

<style lang="css" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 80px;
}

.nada {
  width: 50px;
  height: 20px;
  margin-top: 30px;
  margin-left: 5vw;
  margin-right: 5vw;
}

.input {
  border: 1px solid rgba(207, 216, 220, 0.5);
  border-radius: 6px;
  height: 48px;
  margin-top: 16px;
  margin-right: 2vw;
  margin-left: 2vw;
}

.input input {
  margin: 0 3vw;
  margin-top: 16px;
  width: 50vw;
  border: none;
}

.logo {
  margin-top: 12px;
  margin-right: 5vw;
  margin-bottom: 11px;
}

.btn {
  width: 140px;
  height: 48px;
  background: linear-gradient(135deg, #79beff 0%, #448aff 100%);
  border-radius: 6px;
  border: none;
  margin-right: 39px;
  margin-top: 16px;
}

.filtros {
  background: #ebeff0;
  height: 57px;
  display: flex;
  justify-content: space-between;
}

.dropbox {
  width: 162px;
  height: 40px;
  margin-right: 12px;
  border: 1px solid rgba(207, 216, 220, 0.5);
  border-radius: 6px;
  margin-top: 9px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 14px;
  align-items: center;
  letter-spacing: 0.3px;
  color: #78909c;
  padding-left: 17px;
}

.dropbox-container {
  margin-right: 11vw;
}

.onit {
  display: flex;
}

#ttm {
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  color: #2e384d;
  margin-top: 12px;
  margin-bottom: 13px;
}

#onit {
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: #2e384d;
  margin-top: 12px;
  margin-bottom: 13px;
  margin-left: 7vw;
}

#triangulo {
  border-bottom: 1px solid #2e384d;
  border-right: 1px solid #2e384d;
  width: 5px;
  height: 5px;
  margin: 24px 17px;
  transform: rotate(-40deg);
}
</style>