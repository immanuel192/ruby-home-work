import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState } from './interface';
import moduleSubject from './subject.module';

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
    subjects: moduleSubject(),
  },
});
