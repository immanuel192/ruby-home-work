import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import router from './router';
import store from './store';
import { DI_ROUTER, DI_STORE } from './share';

Vue.use(VueCompositionApi);
Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
  provide: {
    [DI_ROUTER as symbol]: router,
    [DI_STORE as symbol]: store,
  },
}).$mount('#app');
