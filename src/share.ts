import { InjectionKey, inject } from '@vue/composition-api';
import { Store } from 'vuex';
import { IAppState } from './store/interface';

export const DI_STORE: InjectionKey<Store<IAppState>> = Symbol('store');

export const injectStore = () => {
  const store = inject(DI_STORE);
  if (!store) {
    throw new Error('Can not inject store');
  }
  return store;
};
