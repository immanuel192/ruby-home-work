// To setup vue local instance for vue-jest
import Vue from 'vue';
import VueComposition from '@vue/composition-api';
// Do not use the file framework7-custom here
import Framework7 from 'framework7/js/framework7';
import Framework7Vue from 'framework7-vue';

Vue.use(VueComposition);
Framework7.use(Framework7Vue);
