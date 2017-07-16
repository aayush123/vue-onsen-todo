<template>
  <v-ons-page>
    <v-ons-tabbar :tabs="tabs" position="top">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import ActiveTasksPage from './ActiveTasksPage';
import CompletedTasksPage from './CompletedTasksPage';

export default {
  name: 'home',
  data() {
    return {
      tabs: [
        {
          label: 'Active',
          page: ActiveTasksPage,
          active: true,
        },
        {
          label: 'Complete',
          page: CompletedTasksPage,
        },
      ],
    };
  },
  methods: {
    goTo(url) {
      window.open(url, '_blank');
    },
  },
  components: {
    ActiveTasksPage,
    CompletedTasksPage,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
}

img {
  max-width: 300px;
}

ons-list-title:not(:first-of-type) {
  margin-top: 30px;
}

ons-card {
  text-align: center;
}

ons-list-item, ons-card {
  cursor: pointer;
}
</style>
