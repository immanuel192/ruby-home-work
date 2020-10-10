import { InjectionKey, inject } from '@vue/composition-api';
import { IStore } from './store/interface';

export const DI_STORE: InjectionKey<IStore> = Symbol('store');

export const injectStore = () => {
  const store = inject(DI_STORE);
  if (!store) {
    throw new Error('Can not inject store');
  }
  return store;
};
