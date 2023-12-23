<template>
  <div>
    <h1>Створити тест</h1>
    <label>
      <p>Назва тесту</p>
      <input v-model="title" />
    </label>
    <button @click="changeMulti">
      З декількома правильними відповідями: {{ JSON.stringify(this.form.multi) }}
    </button>
    <form @submit.prevent="createQuestion">
      <div class="label-wrapper">
        <label>
          <p>Запитання</p>
          <input v-model="form.question" />
        </label>
      </div>
      <div class="label-wrapper">
        <label>
          <p>Відповідь</p>
          <input v-model="form.answers[0].text" />
        </label>
        <label>
          <p>Правильна</p>
          <input
            type="checkbox"
            :checked="form.answers[0].truly"
            @change="changeTruly(0)"
          />
        </label>
      </div>
      <div class="label-wrapper">
        <label>
          <p>Відповідь</p>
          <input v-model="form.answers[1].text" />
        </label>
        <label>
          <p>Правильна</p>
          <input
            type="checkbox"
            :checked="form.answers[1].truly"
            @change="changeTruly(1)"
          />
        </label>
      </div>
      <div class="label-wrapper">
        <label>
          <p>Відповідь</p>
          <input v-model="form.answers[2].text" />
        </label>
        <label>
          <p>Правильна</p>
          <input
            type="checkbox"
            :checked="form.answers[2].truly"
            @change="changeTruly(2)"
          />
        </label>
      </div>
      <div class="label-wrapper">
        <label>
          <p>Відповідь</p>
          <input v-model="form.answers[3].text" />
        </label>
        <label>
          <p>Правильна</p>
          <input
            type="checkbox"
            :checked="form.answers[3].truly"
            @change="changeTruly(3)"
          />
        </label>
      </div>
      <button>Створити питання</button>
    </form>

    <ul>
      <li v-for="(test, index) in tests" :key="index">
        <h2>{{ test.text }}</h2>
        <ol>
          <li v-for="(answer, index) in test.answers" :key="index">
            <h3>{{ answer.text }}</h3>
            <h4>Правильний: {{ JSON.stringify(answer.truly) }}</h4>
          </li>
        </ol>
      </li>
    </ul>

    <button @click="createTest">Завершити свторення тестування</button>
  </div>
</template>

<script>
// import { addDoc, collection } from "firebase/firestore";
// import firebase from "../firebase";

const getInitialData = () => ({
  question: "",
  answers: [
    { text: "", truly: false },
    { text: "", truly: false },
    { text: "", truly: false },
    { text: "", truly: false },
  ],
  multi: false,
});

export default {
  data() {
    return {
      form: {
        ...getInitialData(),
      },
      title: "",
      tests: [],
    };
  },
  methods: {
    resetForm() {
      this.form = getInitialData();
    },
    changeMulti() {
      this.form.multi = !this.form.multi;

      if (!this.multi) {
        this.resetCheckedAnswers();
      }
    },
    resetCheckedAnswers() {
      this.form.answers = this.form.answers.map((el) => ({ ...el, truly: false }));
    },
    // resetForm() {
    //   this.answers = [
    //     { text: "", truly: false },
    //     { text: "", truly: false },
    //     { text: "", truly: false },
    //     { text: "", truly: false },
    //   ];
    //   this.multi = false;
    //   this.question = "";
    // },
    createQuestion() {
      this.tests.push({
        text: this.form.question,
        answers: this.form.answers,
        multi: this.form.multi,
      });

      this.resetForm();
    },
    async createTest() {
      console.log(this.title, this.tests);
      // await addDoc(collection(firebase.db, "tests"), {
      //   title: this.title,
      //   questions: this.tests,
      // });
    },
    changeTruly(index) {
      if (!this.form.answers[index]) {
        return;
      }

      if (!this.form.answers[index].truly) {
        if (!this.form.multi) {
          this.resetCheckedAnswers();
        }

        this.form.answers[index].truly = true;
      } else {
        this.form.answers[index].truly = false;
      }
    },
  },
};
</script>

<style>
.label-wrapper {
  display: flex;
}
</style>
