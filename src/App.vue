<template>
  <div id='app'>
    <v-toolbar app color='black'>
      <v-btn @click="$router.push('/')" flat color='blue'>Inicial</v-btn>
      <v-btn @click="$router.push('/about')" flat color='blue'>Sobre</v-btn>
      <v-btn @click="$router.push('/incremental')" flat color='blue'>Incremental</v-btn>
      <v-spacer/>
      <img align='right' width='40px' src='./assets/logo_nb.png'>
    </v-toolbar>
    <router-view style='padding-top: 30px'/>
  </div>
</template>

<script>
import SideBar from './components/SideBar';

export default {
  name: 'App',
  components: {
    SideBar
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;
  margin-bottom: 40px;
}

body * {
  max-width: 100%;
}
</style>
