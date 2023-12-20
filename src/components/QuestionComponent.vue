<template >
  <div class="quest">
    <h1>{{ currentTest.question }}</h1>
    <div v-if="!isFinished">
      <p></p>
      <button class="btn"
        v-for="answer in currentTest.answers"
        :key="answer"
        @click="selectAnswer(answer)"
      >
        {{ answer }} 
        <br> 
      </button>
    </div>

    <p v-else>
      Тестування завершено! Ваш результат: {{ score }} / {{ tests.length }} <br>
      <router-link to="/" @click="reset">Спробувати ще раз</router-link>
    </p>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['tests', 'user']),
    ...mapGetters(['currentTest', 'score']),
    isFinished() {
    return this.finished || 
           this.user.currentTestIndex >= this.tests.length
  }  
  },
  data() {
  return {
    finished: false    
  }
},
  methods: {
    ...mapMutations(['nextTest', 'updateScore']),
    showResultAlert(answer) {
    if(answer === this.currentTest.correctAnswer) {
      alert('Відповідь правильна!');
    } else {  
      alert(`Відповідь неправильна! Правильна відповідь: ${this.currentTest.correctAnswer}`);
    
    } 
    
  } ,
  reset() {
    this.$store.commit('resetTest') 
  },
  nextTest() {
    if (this.user.currentTestIndex < this.tests.length - 1) {
      this.user.currentTestIndex++
    } else {
      this.finished = true
    }
  } ,
    selectAnswer(answer) {
      
      if (answer === this.currentTest.correctAnswer) {
        this.updateScore()  
      }
      this.showResultAlert(answer);
      this.nextTest()
    }
  }
}
</script>
<style>
.quest{
  display: flex;
  
  align-items: center;
  justify-content: center;
  
  flex-direction: column;
  height: 50vh;
  width: 50vw;
  margin: 0 auto; /* Optional: This centers the .test div horizontally */
  border: 2px solid black; /* Add a black border with a width of 2px */
  background-color: PapayaWhip;
  
}
.btn{
  color: black;
  background-color: white;
  border:1px solid black;
  border-radius:10px;
  padding:15px;
    min-height:30px; 
    min-width: 120px;
}
.btn:hover {
      background-color:white;
      color:black;
      
  }
</style>