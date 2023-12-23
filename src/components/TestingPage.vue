<template>
  <div class="container">
    <h1>{{ test.title }}</h1>
    <ul>
      <li class="question" v-for="(question,questionIndex) in test.questions " :key=question>
        {{ question.text }}
        <ul>
          <li v-for="(answer,answerIndex) in question.answers " :key="answer">
            <div v-if="question.multi">
              
              <input @click="answerQuestion(questionIndex,answerIndex)" type="checkbox" >
              {{ answer.text }}
            </div>
            <div v-else>
              <input type="radio" @click="answerQuestion(questionIndex,answerIndex)" :name="question.text">
              {{ answer.text }}
            </div>
            
          </li>

        </ul>
      </li>

    </ul>
    <ul>
      <li class="question" v-for="(question,) in test.questions " :key=question>
        {{ question.text }}
        <ul>
          <li v-for="(answer,) in question.answers " :key="answer">
            <div v-if="question.multi">
              <p :style="answer.truly?'color:green':'color:red'">{{ answer.selected?'obrano':'' }} {{ answer.text }}</p>
             
              
            </div>
            <div v-else>
              <p :style="answer.truly?'color:green':'color:red'"> {{ answer.selected?'obrano':'' }}{{ answer.text }}</p>
            </div>
            
          </li>

        </ul>
      </li>

    </ul>
    <button>Завершити тестування</button>
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
      score:0,
      test: {
        title: "",
        questions: [],
      },
    };
  },
  methods: {
    answerQuestion(questionIndex,answerIndex){
      this.test.questions[questionIndex].answers[answerIndex].selected=true
      
    },
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: PeachPuff;
}
.question{
  background-color: rgb(253, 248, 248);
  margin-top: 20px;
  border-radius: 10px  ;
  padding: 10px;
  border: 2px solid rgb(167, 165, 165);
}
li{
  list-style-type: none;
}
ul{
  padding: 0px;
}
</style>
