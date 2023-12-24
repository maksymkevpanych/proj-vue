<template>
  <div class="container">
    <h1 v-if="!isFinished">{{ test.title }}</h1>
    <ul v-if="!isFinished">
      <li
        class="question"
        v-for="(question, questionIndex) in test.questions"
        :key="questionIndex"
      >
        {{ question.text }}
        <ul>
          <li
            v-for="(answer, answerIndex) in question.answers"
            :key="answerIndex"
          >
            <div v-if="question.multi">
              <input
                @click="answerQuestion(questionIndex, answerIndex)"
                type="checkbox"
              />
              {{ answer.text }}
            </div>
            <div v-else>
              <input
                type="radio"
                @click="answerQuestion(questionIndex, answerIndex)"
                :name="question.text"
              />
              {{ answer.text }}
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <h1 v-if="isFinished">Результат</h1>
    <h2 v-if="score !== null">
      Правильних відповідей: {{ score }} / {{ test.questions.length }}
    </h2>
    <ul v-if="isFinished">
      <li
        class="question"
        v-for="(question, questionIndex) in test.questions"
        :key="questionIndex"
      >
        {{ question.text }}
        <ul>
          <li
            v-for="(answer, answerIndex) in question.answers"
            :key="answerIndex"
          >
            <div>
              <p
                :style="{
                  color: answer.truly ? 'green' : 'red',
                  'background-color': answer.selected
                    ? answer.truly
                      ? 'springgreen'
                      : 'coral'
                    : '',
                  padding: answer.selected ? '5px' : '0',
                }"
              >
                {{ answer.text }}
              </p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <button @click="finishTest" v-if="!isFinished">Завершити тестування</button>
    <h2 v-if="isFinished">
      <router-link to="/">
        <button>На головну сторінку</button>
      </router-link>
      <button @click="retakeTest()">Розпочати тестування заново</button>
    </h2>
  </div>
</template>

<script>
import firebase from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  components: {},
  data() {
    return {
      isFinished: false,
      score: null,
      test: {
        title: "",
        questions: [],
      },
    };
  },
  methods: {
    retakeTest() {
      this.isFinished = false;
      this.score = null;
      this.test.questions.forEach((question) => {
        question.answers.forEach((answer) => {
          answer.selected = false;
        });
      });
    },

    answerQuestion(questionIndex, answerIndex) {
      const question = this.test.questions[questionIndex];

      if (question.multi) {
        question.answers[answerIndex].selected =
          !question.answers[answerIndex].selected;
      } else {
        question.answers.forEach((answer, index) => {
          question.answers[index].selected = index === answerIndex;
        });
      }
    },
    async getTest() {
      const query = await getDoc(
        doc(firebase.db, "tests", this.$route.params.id)
      );

      if (query.data()) {
        this.test = query.data();
      }
    },
    finishTest() {
      this.score = this.calculateScore();
      this.isFinished = true;
    },
    calculateScore() {
      let score = 0;

      this.test.questions.forEach((question) => {
        const correctAnswers = question.answers
          .filter((answer) => answer.truly)
          .map((answer) => answer.text);
        const selectedAnswers = question.answers
          .filter((answer) => answer.selected && answer.truly)
          .map((answer) => answer.text);

        if (
          JSON.stringify(correctAnswers) === JSON.stringify(selectedAnswers)
        ) {
          score++;
        }
      });

      return score;
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
  background-color: rgb(241, 212, 235);
}
.question {
  background-color: white;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid black;
}
li {
  list-style-type: none;
}
ul {
  padding: 0px;
}
button {
  background-color: rgb(122, 25, 122);
  border: solid black 1px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}
button:hover {
  color: white;
  background-color: black;
}
</style>
