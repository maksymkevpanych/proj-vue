<template>
  <div class="container">
    <h1>Вхід</h1>

    <div class="form-container">
      <label>
        <span>Пошта</span>
        <input v-model="email" />
      </label>
      <button @click="signInAsUser">Увійти як користувач</button>
      <button @click="signInAsAdmin">Увійти як адміністратор</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    ...mapMutations(["signIn"]),
    signInAsUser() {
      this.signIn({ email: this.email, role: "user" });

      this.$router.push("/");
    },
    signInAsAdmin() {
      this.signIn({ email: this.email, role: "admin" });

      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
label {
  display: flex;
  flex-direction: column;
}

.form-container {
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
}

button {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
</style>
