<template>
  <v-ons-gesture-detector @swipeleft="swipe('left')" @swiperight="swipe('right')">
    <v-ons-tabbar :tabs="tabs" visible="true" :index.sync="activeIndex">
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
      activeIndex: 0,
      tabs: [
        {
          icon: 'ion-home',
          label: 'Tasks',
          page: TasksPage,
          animation: 'push',
        },
        {
          icon: 'ion-chatbox',
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
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
