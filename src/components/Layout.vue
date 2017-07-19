<template>
  <v-ons-gesture-detector @swipeleft="swipe('left')" @swiperight="swipe('right')">
    <v-ons-tabbar :tabs="tabs" :visible="tabsVisible" :index.sync="activeIndex">
    </v-ons-tabbar>
  </v-ons-gesture-detector>
</template>

<script>
import TasksPage from './TasksPage';
import ProjectsPage from './ProjectsPage';

export default {
  name: 'layout',
  data() {
    return {
      tabsVisible: true,
      activeIndex: 0,
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
        this.activeIndex += 1;
      } else if (direction === 'right' && this.activeIndex === 1) {
        this.activeIndex -= 1;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
