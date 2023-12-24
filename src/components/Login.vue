<template>
  <div class="container">
    <h1 class="log">Вхід
      <div class="form-container">
      <button @click="signInAsUser">Увійти як користувач</button>
      <button @click="signInAsAdmin">Увійти як адміністратор</button>
    </div>
    </h1>

    
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
  border: black 2px solid;
  border-radius: 10px;
  color: white;
  background-color: rgb(122, 25, 122);
}
button:hover {
  background-color: black;
}
.log{
  margin-top: 10%;
  border: 2px solid black;
  background-color: whitesmoke;
  border-radius:10px ;
}
</style>
