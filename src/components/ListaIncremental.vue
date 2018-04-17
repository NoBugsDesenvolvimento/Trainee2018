<template>
    <div class='container'>
      <v-list>
        <p class='subheader display-1'> Itens </p>
        <v-list-tile class='tile' avatar v-for='i in items' :key='i.index'>
            <v-list-tile-content> 
              <v-list-tile-title> {{ i.title }} </v-list-tile-title>
              <v-list-tile-sub-title>{{ i.index }} </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <v-btn round class='remove' @click='removeItem(i);'>X</v-btn>
            </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    <AdicionarItem height='45' fixed=true color='black'/>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AdicionarItem from './AdicionarItem';

export default {
  name: 'ListaIncremental',
  components: {
    AdicionarItem
  },
  computed: {
    ...mapGetters(['items'])
  },
  methods: {
    ...mapMutations(['removeItem'])
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.remove {
  background-color: red;
  color: black;
  min-width: 0px;
  max-width: 200px !important;
  width: 200px !important;
}

.tile {
  color: black;
  background-color: lightblue;
  border-radius: 20px;
  border: 1px solid darkgrey;
  margin: 10px;
}

</style>
