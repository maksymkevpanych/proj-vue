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
body {
  min-height: 100vh;
  background-color: rgb(241, 212, 235);

}
button {
  padding: 5px;
}
.container {
  padding: 2%;
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

a {
  color: black;
  padding: 5px;
}
a:hover {
  color: grey;
}

</style>
