<template>
  <div class="container">
    <QuestionComponent></QuestionComponent>
  </div>
</template>

<script>
import QuestionComponent from "./QuestionComponent.vue";
import firebase from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  components: {
    QuestionComponent,
  },

  data() {
    return {
      test: {
        title: "",
        questions: [],
      },
    };
  },
  methods: {
    async getTest() {
      const query = await getDoc(
        doc(firebase.db, "tests", this.$route.params.id)
      );

      if (query.data()) {
        this.test = query.data();
      }
    },
  },
  mounted() {
    this.getTest();
  },
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Optional: Adjust the height based on your design */
  background-color: PeachPuff;
}
</style>
