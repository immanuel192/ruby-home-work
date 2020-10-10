import { Module } from 'vuex';
import groupBy from 'lodash/groupBy';
import { ISubject, IModuleSubjectState } from '@/store/interface';
import subjects from '@/data/subjects';

function generateSubjects(): ISubject[] {
  return subjects;
}

/**
 * Vuex store for topic
 */
export default () => ({
  state: () => ({
    data: generateSubjects(),
  }),
  mutations: {
    testMutation(state) {
      state.data[0].styleConfig!.title = 'Trung';
      console.log(state);
    },
  },
  getters: {
    groupedSubjects: (state) => Object.entries(
      groupBy(state.data, (t) => t.group),
    ).map((t) => ({ key: t[0], items: t[1] })),
  },
  actions: {
  },
}) as Module<IModuleSubjectState, unknown>;
