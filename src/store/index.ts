import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState } from './interface';
import moduleTopic from './topic.module';

Vue.use(Vuex);

export default new Vuex.Store<IAppState>({
  state: () => ({
    testValue: '',
  }),
  mutations: {
    rootMutation(state) {
      state.testValue = 'rrf';
    },
  },
  actions: {
  },
  modules: {
    topics: moduleTopic(),
  },
});
