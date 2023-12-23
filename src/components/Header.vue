<template>
  <header>
    <nav>
      <router-link to="/">
        <button class="button">Головна</button>
      </router-link>
      <router-link v-if="user.role === 'admin'" to="/create">
        <button class="button">Створити тест</button>
      </router-link>

      <div style="margin-left: auto" v-if="user.isLoggedIn">
        <p>
          {{ user.role === "admin" ? "Адміністратор" : "Користувач" }}
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
  border-bottom: 2px solid black;
}
</style>
