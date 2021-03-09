<template>
  <nav class="navbar">
    <img class="nada" src="./../assets/nada.png">
    <div class="input">
      <div></div>
      <input type="text" placeholder="Procurar" />
    </div>
    <button class="btn">Filtrar</button>
    <img class="logo" src="./../assets/onit-logo.png" />
  </nav>
</template>

<script>
export default {};
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
</style>