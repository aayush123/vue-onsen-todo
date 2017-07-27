<template>
  <v-ons-gesture-detector @swipeleft="swipe('left')" @swiperight="swipe('right')">
    <v-ons-tabbar :tabs="tabs" :visible="tabsVisible" :index.sync="activeIndex" animation="slide">
    </v-ons-tabbar>
  </v-ons-gesture-detector>
</template>

<script>
import TasksPage from './TasksPage';
import ProjectsPage from './ProjectsPage';
import stateServices from '../StateServices/StateServicesIndex';

export default {
  name: 'layout',
  data() {
    return {
      tabsVisible: true,
      // activeIndex: this.$Store.getters.projectListGetter.length === 0 ? 1 : 0,
      tabs: [
        {
          icon: 'ion-compose',
          label: 'Tasks',
          page: TasksPage,
          animation: 'push',
        },
        {
          icon: 'ion-android-list',
          label: 'Projects',
          page: ProjectsPage,
          animation: 'push',
        },
      ],
    };
  },
  components: {
    TasksPage,
    ProjectsPage,
  },
  methods: {
    swipe: function swipe(direction) {
      if (direction === 'left' && this.activeIndex === 0) {
        // this.activeIndex += 1;
        stateServices.changeActiveIndexInState(this.activeIndex + 1);
      } else if (direction === 'right' && this.activeIndex === 1) {
        // this.activeIndex -= 1;
        stateServices.changeActiveIndexInState(this.activeIndex - 1);
      }
    },
  },
  computed: {
    activeIndex() {
      return this.$Store.getters.activeIndexGetter;
    },
  },
  beforeCreate() {
    if (typeof Storage !== 'undefined') {
      const todoAppData = window.localStorage.getItem('todoAppData');
      if (todoAppData) {
        this.$Store.commit('hydrateState', JSON.parse(todoAppData));
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
