o<template>
    <div class="all">
    <div class="wrapper">
      <div class="centr">
        <h1 class="hh1">
          Тестування по функціях JavaScript <br>
          <div class="test">
           <router-link to="/testing">
            <button class="button">Розпочати тестування</button> 
             </router-link>
          </div>
          
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name:'HomePage',
        
        
    }
    
</script>

<style>
.all {
  background-color: PeachPuff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hh1{
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

.test{
  display: flex;
  justify-content: center;
  margin-top: 91px;
 

}
.buton{
  color: black; /* Колір тексту */
  background-color: lightgrey; /* Колір фону */
}
</style>