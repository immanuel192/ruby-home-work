import Vuex from 'vuex';
import { IModuleTopicState, ITopic } from '@/store/interface';

function generateTopics(): ITopic[] {
  return [
    {
      id: 'math', name: 'Math', enable: true, icon: '', totalNewUpdate: 0,
    },
    {
      id: 'english', name: 'English', enable: true, icon: '', totalNewUpdate: 0,
    },
    {
      id: 'tiengviet', name: 'Tiếng Việt', enable: true, icon: '', totalNewUpdate: 0,
    },
    {
      id: 'tapviet', name: 'Tập viết', enable: true, icon: '', totalNewUpdate: 0,
    },
    {
      id: 'Tapdoc', name: 'Tập đọc', enable: true, icon: '', totalNewUpdate: 0,
    },
  ];
}

/**
 * Vuex store for topic
 */
export default () => new Vuex.Store<IModuleTopicState>({
  state: () => ({
    data: generateTopics(),
  }),
  mutations: {
    testMutation(state) {
      console.log(state);
    },
  },
  actions: {
  },
});
