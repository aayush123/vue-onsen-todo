import Vue from 'vue';

export default function (state, newIndex) {
  Vue.set(state, 'activeIndex', newIndex);
}
