<template>
  <v-footer fixed='fixed' :height='height' color='black'>
    <v-text-field class='field' v-model='title' placeholder='Título'/>
    <v-text-field class='field' v-model='index' placeholder='Índice'/>
    <v-btn class='add' @click='send'>+</v-btn>
  </v-footer>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AdicionarItem',
  props: ['height', 'fixed', 'color'],
  methods: {
    ...mapMutations(['addItem']),
    send: function() {
      const item = { title: this.title, index: this.index };
      const callback = () => {
        this.title = this.index = ''
      }
      this.addItem({item,callback});
    }
  },
  data() {
    return {
      title: '',
      index: ''
    };
  }
};
</script>

<style scoped>
.add {
  margin: 10px;
  height: 25px !important;
  min-width: 0px !important;
  color: black;
  background-color: white;
}

.footer {
  color: white;
}

.field {
  width: 100px !important;
  min-width: 0px !important;
  color: white;
  padding: 32px 10px 10px 10px;
}
</style>
