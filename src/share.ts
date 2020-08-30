import { InjectionKey, inject } from '@vue/composition-api';
import VueRouter from 'vue-router';
import { Store } from 'vuex';

export const DI_ROUTER: InjectionKey<VueRouter> = Symbol('router');
export const DI_STORE: InjectionKey<Store<unknown>> = Symbol('store');

export const injectStore = () => {
  const store = inject(DI_STORE);
  if (!store) {
    throw new Error('Can not inject store');
  }
  return store;
};

export const injectRouter = () => {
  const router = inject(DI_ROUTER);
  if (!router) {
    throw new Error('Can not inject router');
  }
  return router;
};
