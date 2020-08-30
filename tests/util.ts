import * as path from 'path';
import Chance from 'chance';
import { Store } from 'vuex-mock-store';
import VueRouter from 'vue-router';
import { shallowMount as sM, VueClass, ThisTypedShallowMountOptions } from '@vue/test-utils';
import { DI_STORE, DI_ROUTER } from '@/share';
import { IAppState, IAppGetter } from '@/store/interface';

export const chance = new Chance();
export * from '@vue/test-utils';

export const suiteName = (file: string) => path.relative(`${__dirname}/../..`, file).split(path.sep).join('#');

/**
 * Default vuex mock instance
 */
export const mockStore = new Store<IAppState>();
/**
 * Default vue-router mock instance
 */
export const mockRouter = {};

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
    /**
     * Provide your own vue-router instance. Leave blank to use default mock instance
     */
    router?: VueRouter;
  };
}
export const shallowMount = <V extends Vue>
  (component: VueClass<V>, options?: ThisTypedShallowMountOptions<V> & IShallowMountOptions) => {
  const internalOptions = options || {};
  const router = internalOptions?.provide?.router || mockRouter;
  return sM(component, {
    ...internalOptions,
    provide: {
      ...internalOptions?.provide,
      [DI_STORE as symbol]: internalOptions?.provide?.store || mockStore,
      [DI_ROUTER as symbol]: router,
    },
  });
};
