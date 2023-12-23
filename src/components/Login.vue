<template>
  <div>
    <h1>Вхід</h1>

    <div>
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
