<template>
  <div class="container">
    <h2>Список всіх тестів</h2>
    <ul>
      <li v-for="test in tests" :key="test.id">
        <router-link :to="`testing/${test.id}`">
          <h2>{{ test.title }}</h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "HomePage",
  data() {
    return {
      tests: [],
    };
  },
  methods: {
    async getTests() {
      const querySnapshot = await getDocs(collection(firebase.db, "tests"));

      querySnapshot.forEach((doc) => {
        this.tests.push({ ...doc.data(), id: doc.id });
      });
    },
  },
  mounted() {
    this.getTests();
  },
};
</script>

<style scoped>
.all {
  background-color: PeachPuff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hh1 {
  margin-top: 100px;
}
.wrapper {
  height: 50vh;
}

.centr {
  border: black solid 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
}

.test {
  display: flex;
  justify-content: center;
}
.buton {
  color: black; /* Колір тексту */
  background-color: lightgrey; /* Колір фону */
}
</style>
