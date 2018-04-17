import Vue from 'vue';
import Vuex, {
  Store
} from 'vuex';

// import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  items: [{
    title: 'Primeiro',
    index: 1
  }]
};

export default new Store({
  mutations,
  state,
  getters
});
