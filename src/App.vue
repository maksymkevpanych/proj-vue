<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
.container {
  background-color: PeachPuff;
  height: 100vh;
  padding: 2%;
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
