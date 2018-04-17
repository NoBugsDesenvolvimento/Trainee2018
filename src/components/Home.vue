<template>
  <v-layout>
    <div align='center' class='container hello'>
      <h1>{{ msg }}</h1>
      <img v-if='logo' width='25%' src='../assets/logo.png'>
      <br>
      <v-btn color='blue' v-on:click="$router.push('/about')">
        Vai para a página 'Sobre'
      </v-btn>
      <v-btn @click='switchLogo'>Mostra a logo do Vue </v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    switchLogo() {
      this.logo = !this.logo;
    }
  },
  data() {
    return {
      msg: 'Primeira aplicação VueJS',
      logo: false
    };
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.hello {
  display: grid;
}
a {
  color: #42b983;
}
</style>
