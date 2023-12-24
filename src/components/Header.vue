<template>
  <header >
    <nav>
      <router-link class="link" to="/">
       Головна
      </router-link>
      <router-link class="link" v-if="user.role === 'admin'" to="/create">
        Створити тест
        
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
  padding: 20px;
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
.link {
  color:white;
  background-color:rgb(122, 25, 122);
  border: 2px solid black;
  border-radius: 7px;
  margin-right: 10px;
}
.link:hover{
  background-color:black;
  transition-delay: 0.1s; 
}
a {
  text-decoration: none;
}
</style>
