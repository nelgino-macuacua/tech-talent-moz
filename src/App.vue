<template>
  <!--<div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
  <router-view />
</template>

<script>
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

@font-face {
  font-family: 'Circular Std';
  src:  url('../src/assets/fonts/CircularStd-Black.woff2') format('woff2'),
        url('../src/assets/fonts/CircularStd-Black.woff') format('woff');
}


:root{
  font-size: 8px;
  /*font-size: 0.5vw;*/
}
p,
a,
h1 {
  font-family: "Roboto", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
}
</style>