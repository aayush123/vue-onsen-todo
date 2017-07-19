<template lang="html">
  <v-ons-page>
    <div class="projectHeader">
      <h2>{{activeProject}}</h2>
    </div>
    <TodoList :listIcon="listIcon" :completed="taskCompletedStatus" :listHeader="listHeader"/>
    <v-ons-fab position="bottom left" v-if="showDeleteAll" @click="deleteAllCompletedTasks">
      <v-ons-icon icon="md-delete"></v-ons-icon>
    </v-ons-fab>

  </v-ons-page>
</template>

<script>
import TodoList from './TodoList';
import stateServices from '../StateServices/StateServicesIndex';

export default {
  name: 'TasksListTabPage',
  methods: {
    deleteAllCompletedTasks() {
      this.$ons.notification.confirm('Delete all completed tasks?')
      .then((res) => {
        if (res) {
          stateServices.deleteAllCompletedTasksInState();
        }
      });
    },
  },
  computed: {
    activeProject() {
      return this.$Store.getters.activeProjectGetter;
    },
  },
  components: {
    TodoList,
  },
  props: ['taskCompletedStatus', 'listHeader', 'listIcon', 'showDeleteAll'],
};
</script>

<style lang="css" scoped>
.projectHeader {
  text-align: center
}
</style>
