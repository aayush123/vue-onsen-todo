<template lang="html">
  <v-ons-list>
    <v-ons-list-header>
      Active Tasks
    </v-ons-list-header>
    <v-ons-list-item tappable ripple modifier="material" v-for="eachTask in tasks" :key="eachTask.taskId" v-if="eachTask.completed.toString() === completed">
      {{eachTask.taskTitle}}
    </v-ons-list-item>
  </v-ons-list>
</template>

<script>
export default {
  props: ['completed'],
  computed: {
    activeProject() {
      return this.$Store.getters.activeProjectGetter;
    },
    tasks() {
      return this.$Store.getters.tasksForActiveProject(this.activeProject);
    },
  },
};
</script>

<style lang="css">
</style>
