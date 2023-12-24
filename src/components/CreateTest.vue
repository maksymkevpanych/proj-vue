<template>
  <div>
    <h1>Створити тест</h1>
    <label>
      <p>Назва тесту</p>
      <input v-model="title" />
    </label>

    <ul>
      <li class="test-item" v-for="(test, index) in tests" :key="index">
        <h2>
          {{ test.text }}
          <button @click="deleteQuestion(index)">Видалити</button>
        </h2>
        <ol>
          <li v-for="(answer, index) in test.answers" :key="index">
            <h3 :style="answer.truly ? 'color:green' : 'color:red'">
              {{ answer.text }}
            </h3>
          </li>
        </ol>
      </li>
      <li class="form-item">
        <form @submit.prevent="createQuestion">
          <div class="label-wrapper">
            <label>
              <p>Запитання</p>
              <input v-model="form.question" />
            </label>
            <button
              style="margin-left: 20px"
              type="button"
              @click="changeMulti"
            >
              Декілька вірних відповідей:
              {{ this.form.multi ? "Так" : "Ні" }}
            </button>
          </div>

          <div style="display: flex; margin-top: 20px">
            <div
              v-for="(answer, index) in form.answers"
              :key="index"
              class="label-wrapper"
              style="margin-right: 20px"
            >
              <label>
                <p>Відповідь</p>
                <input v-model="form.answers[index].text" />
              </label>
              <input
                style="margin-left: 5px"
                type="checkbox"
                :checked="form.answers[index].truly"
                @change="changeTruly(index)"
              />
            </div>
          </div>
        </form>
      </li>
      <button @click="createQuestion">Створити питання</button>
    </ul>

    <button @click="createTest" class="endBtn">Завершити свторення тесту</button>
  </div>
</template>

<script>
import { addDoc, collection } from "firebase/firestore";
import firebase from "../firebase";

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
      this.form.answers = this.form.answers.map((el) => ({
        ...el,
        truly: false,
      }));
    },
    createQuestion() {
      if (this.checkForm()) {
        return alert("Одне з полів пусте");
      }

      this.tests.push({
        text: this.form.question,
        answers: this.form.answers,
        multi: this.form.multi,
      });

      this.resetForm();
    },
    async createTest() {
      if (this.checkFullTest()) {
        return alert("Тест не заповнений");
      }

      await addDoc(collection(firebase.db, "tests"), {
        title: this.title,
        questions: this.tests,
      });

      alert(`Тест ${this.title} успішно створено!`);

      this.$router.push("/");
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
    deleteQuestion(index) {
      this.tests = this.tests.filter((el, i) => i !== index);
    },
    checkForm() {
      return (
        this.form.question.trim() === "" ||
        this.form.answers.some((el) => el.text.trim() === "") ||
        this.form.answers.every((el) => el.truly === false)
      );
    },
    checkFullTest() {
      return this.title.trim() === "" || this.tests.length === 0;
    },
  },
};
</script>

<style>
.test-item {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  border:2px solid black;
  
  
}

.form-item {
  background-color: white;
  padding: 20px;
  margin-top: 30px;
  border-radius: 5px;
  border:2px solid black;
}
.label-wrapper {
  display: flex;
  align-items: flex-end;
}

ul > li {
  list-style-type: none;
}
ul {
  padding: 0;
}

button {
  margin-top: 10px;
}

input,
button {
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  border: black 2px solid;
  color: black;
  background-color: white;
}
button:hover {
  background-color:black;
  color:white;
  transition-delay: 0.1s; 
}
input {
  margin: 0;
  border: black 2px solid;
}
p {
  margin: 0;
  margin-top: 10px;
}
li{
  
}
.endBtn{
  border: 2px solid black;
  border-radius:5px;
  background-color:rgb(122, 25, 122);
  color:white;
}
</style>
