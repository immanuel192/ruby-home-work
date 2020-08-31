import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { DI_ROUTER, DI_STORE } from './share';
import '@/assets/custom.scss';

Vue.use(VueCompositionApi);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
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
