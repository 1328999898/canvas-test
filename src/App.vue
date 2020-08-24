<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header-item></header-item>
    <router-view/>
  </div>
</template>

<script>
import headerItem from '@/components/headerItem';

export default {
  name: 'App',
  components: {
    headerItem
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
