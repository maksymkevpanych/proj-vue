<template>
  <div class="container">
    <h2>Список всіх тестів</h2>
    <ul>
      <li class="test-element" v-for="test in tests" :key="test.id">
        <router-link
          :style="{ width: user.role === 'admin' ? '90%' : '100%' }"
          class="test"
          :to="`testing/${test.id}`"
        >
          <h2>{{ test.title }}</h2>
        </router-link>
        <button
          v-if="user.role === 'admin'"
          style="margin-top: 20px; margin-left: 20px"
          @click="deleteTest(test.id)"
        >
          Видалити
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { mapState } from "vuex";

export default {
  name: "HomePage",
  data() {
    return {
      tests: [],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async getTests() {
      this.tests = [];

      const querySnapshot = await getDocs(collection(firebase.db, "tests"));

      querySnapshot.forEach((doc) => {
        this.tests.push({ ...doc.data(), id: doc.id });
      });
    },
    async deleteTest(id) {
      await deleteDoc(doc(firebase.db, "tests", id));

      await this.getTests();
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
  background-color: white;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid black;
  width: 90%;
}

.test-element {
  display: flex;
}
</style>
