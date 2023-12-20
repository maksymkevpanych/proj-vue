import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      tests: [
        {
          question: 'Яку функцію доцільно використати для виведення інформації у спливаючому вікні?',
          answers: ['alert()', 'print()', 'Console.WriteLine();'],
          correctAnswer: 'alert()'  ,
          id:1
        },
        {
          question: 'Якого типу значення повертає функція confirm()?',
          answers: ['number', 'string', 'boolean'],
          correctAnswer: 'boolean',
          id:2
        },
        {
          question: 'Яка функція дає можливість отримати дані від користувача у спливаючосу вікні?',
          answers: ['alert()', 'Console.ReadLine();', 'prompt()'],
          correctAnswer: 'prompt()'  ,
          id:1
        },
        {
          question: 'Яку функцію доцільно використати для переведення з рядку в ціле число?',
          answers: ['parseInt()', 'toInt()', 'Convert.ToInt32();'],
          correctAnswer: 'parseInt()',
          id:2
        },
        {
          question: 'За допомогою якої функції можна добавити елемент в кінець масиву?',
          answers: ['array.push()', 'array.pop()', 'array.splice()'],
          correctAnswer: 'array.push()'  ,
          id:1
        },
        {
          question: 'За допомогою якої функції можна дістати елемент з кінця масиву?',
          answers: ['array.pop()', 'array.last()', 'array.getLast()'],
          correctAnswer: 'array.pop()',
          id:2
        },
        {
          question: 'За допомогою якої функції можна розбити рядок на масив',
          answers: ['str.split()', 'str.makeArray()', 'str.filter()'],
          correctAnswer: 'str.split()'  ,
          id:1
        },
        {
          question: 'Що робить функція console.log()?',
          answers: ['Виводить дані в консоль', 'Виводить дані у спливаючому вікні', 'Отримує дані від користувача'],
          correctAnswer: 'Виводить дані в консоль',
          id:2
        }
      ],
      user: {
        score: 0,  
        currentTestIndex: 0,
        selectedAnswer: null
      }
    }
  },
  getters: {
    currentTest(state) {
      return state.tests[state.user.currentTestIndex] 
    },
    score(state) {
      return state.user.score
    }
  },
  mutations: {
    nextTest(state) {
      if (state.user.currentTestIndex < state.tests.length - 1) {
        state.user.currentTestIndex++ 
      }
    },
    updateScore(state) {
      state.user.score++  
    },
    resetTest(state) {
      state.user = {
        score: 0,
        currentTestIndex: 0,
        selectedAnswer: null  
      }
    }  
  }
})

createApp(App)
.use(router)
.use(store)
.mount('#app')
