import store from './index';

export default {
  store,
  install(Vue) {
    // eslint-disable-next-line
    Vue.prototype.$Store = store
  },
};
