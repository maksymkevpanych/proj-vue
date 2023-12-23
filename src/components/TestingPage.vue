<template>
  <div >
    <h1>{{ test.title }}</h1>
    <ul>
      <li v-for="question in test.questions " :key=question> 
        {{ question.text }}
         <ul>
          <li v-for="answer in question.answers " :key="answer">{{ answer.text }}</li>
         </ul>
      </li>
     
    </ul>
  </div>
</template>

<script>

import firebase from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  components: {
    
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
  height: 100vh; 
  background-color: PeachPuff;
}
</style>
