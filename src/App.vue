<template>
  <div id="app">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <!-- <HelloWorld/> -->
        <TaskManager/>

  </div> 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from './components/HelloWorld.vue';
import TaskManager from './components/TaskManager.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HelloWorld,
    TaskManager,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
