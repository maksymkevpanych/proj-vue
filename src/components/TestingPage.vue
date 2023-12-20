<template>
    <div class="container">
    <QuestionComponent></QuestionComponent>
  </div> 
  </template>
  
  <script>
import QuestionComponent from './QuestionComponent.vue';

  
  export default {
  
    components: {
    QuestionComponent
},
  
    data() {
      return {
        
      }
    }
  
  }
  </script>
  <style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Optional: Adjust the height based on your design */
    background-color: PeachPuff;
  }
  </style>