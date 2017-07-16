// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import VueResource from 'vue-resource';
import App from './App';
import storePlugin from './store/storePlugin';

Vue.use(storePlugin);
Vue.config.productionTip = false;

Vue.use(VueOnsen);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
