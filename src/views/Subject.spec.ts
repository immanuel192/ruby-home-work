import { ref } from '@vue/composition-api';
import Subject from '@/views/Subject.vue';
import {
  shallowMount, suiteName,
  createMockStore, IStoreMock,
} from '@tests/util';
import * as reactives from '@/reactive';

describe(suiteName(__filename), () => {
  let store: IStoreMock;

  beforeAll(() => {
    store = createMockStore();
  });

  it('should matched snapshot', () => {
    store.getters.groupedSubjects = [
      {
        key: 'subject1',
        items: [
          {
            enable: true,
            group: 'group1',
            id: 'id1',
            name: 'name1',
          },
          {
            enable: true,
            group: 'group2',
            id: 'id2',
            name: 'name2',
          },
        ],
      },
      {
        key: 'subject2',
        items: [
          {
            enable: true,
            group: 'group3',
            id: 'id3',
            name: 'name3',
          },
        ],
      },
    ];

    jest.spyOn(reactives, 'reactiveDate').mockReturnValue({
      currentDateTitle: ref('Today date'),
    });
    const wrapper = shallowMount(Subject, {
      provide: { store },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
