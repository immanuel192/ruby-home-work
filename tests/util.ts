import * as path from 'path';
import Chance from 'chance';
import { Store } from 'vuex-mock-store';
import { shallowMount as sM, VueClass, ThisTypedShallowMountOptions } from '@vue/test-utils';
import { DI_STORE } from '@/share';
import { IAppState, IAppGetter } from '@/store/interface';

export const chance = new Chance();
export * from '@vue/test-utils';

export const suiteName = (file: string) => path.relative(`${__dirname}/../..`, file).split(path.sep).join('#');

/**
 * Default vuex mock instance
 */
export const mockStore = new Store<IAppState>();

interface IShallowMountOptions<
  State extends object = IAppState,
  Getter extends object = IAppGetter
  > {
  [k: string]: any;
  provide?: {
    [v: string]: any;
    /**
     * Provide your own vuex store. Leave blank to use global vuex-mock-store
     */
    store?: Store<State, Getter>;
  };
}
export const shallowMount = <V extends Vue>
  (component: VueClass<V>, options?: ThisTypedShallowMountOptions<V> & IShallowMountOptions) => {
  const internalOptions = options || {};
  return sM(component, {
    ...internalOptions,
    provide: {
      ...internalOptions?.provide,
      [DI_STORE as symbol]: internalOptions?.provide?.store || mockStore,
    },
  });
};
