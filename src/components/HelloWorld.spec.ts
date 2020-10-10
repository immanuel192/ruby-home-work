import HelloWorld from '@/components/HelloWorld.vue';
import {
  shallowMount, suiteName, chance, createMockStore,
} from '@tests/util';

describe(suiteName(__filename), () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const mockStore = createMockStore();
    mockStore.state.testValue = chance.string();
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      provide: { store: mockStore },
    });
    expect(wrapper.text()).toMatch(msg);
    expect(wrapper.find('.store-test').text()).toEqual(mockStore.state.testValue);
  });
});
