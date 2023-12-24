<template>
  <div class="">

    <div class="form-container">
      <h1 class="log">Вхід</h1>

      <button @click="signInAsUser">Увійти як користувач</button>
      <button @click="signInAsAdmin">Увійти як адміністратор</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "../firebase";

const auth = getAuth(firebase.frApp);
const provider = new GoogleAuthProvider();

export default {
  name: "LoginPage",
  methods: {
    ...mapMutations(["signIn"]),
    signInAsUser() {
      signInWithPopup(auth, provider)
        .then((result) => {
          this.signIn({ email: result.user.email, role: "user" });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => this.$router.push("/"));
    },
    signInAsAdmin() {
      signInWithPopup(auth, provider)
        .then((result) => {
          this.signIn({ email: result.user.email, role: "admin" });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => this.$router.push("/"));
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
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  margin-top: 10%;
  border: 2px solid black;
  background-color: whitesmoke;
  border-radius: 10px;

  padding: 20px;
}

h1 {
  text-align: center;
}

button {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border: black 2px solid;
  border-radius: 10px;
  color: white;
  background-color: rgb(122, 25, 122);
}
button:hover {
  background-color: black;
}
.log {

}
</style>
