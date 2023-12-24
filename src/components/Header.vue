<template>
  <header >
    <nav>
      <router-link to="/">
        <h3>Головна</h3>
      </router-link>
      <router-link v-if="user.role === 'admin'" to="/create">
        <h3>Створити тест</h3>
        
      </router-link>

      <div style="margin-left: auto" v-if="user.isLoggedIn">
        <p>
          {{ user.role === "admin" ? "Адміністратор:" : "Користувач" }}
          {{ user.email }}
        </p>
      </div>
      <div style="margin-left: auto" v-else>
        <router-link to="/login">
          <button class="button">Увійти</button>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderVue",
  components: {},
  computed: {
    ...mapState(["tests", "user"]),
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  padding: 20px 0;
}
p {
  margin: 0;
}
header {
  border: black solid 2px;
  border-radius: 10px;
  background-color: whitesmoke;
}
button{
  border: black solid 2px;
  border-radius: 10px;
  background-color: rgb(122, 25, 122);
  color: white;
}
h3{
  color:white;
  background-color:rgb(122, 25, 122);
  border: 2px solid black;
  border-radius: 7px;
}
h3:hover{
  background-color:black;
  transition-delay: 0.1s; 
}
</style>
