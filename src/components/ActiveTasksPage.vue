<template lang="html">
  <v-ons-page>
    <div class="projectHeader">
      <h2>{{activeProject}}</h2>
      <!-- <hr> -->
    </div>
    <TodoList completed=false :tasks="tasks"/>
    <v-ons-fab position="bottom right" @click="showAddTaskDialog">
      <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>
    <v-ons-alert-dialog cancelable
      :visible.sync="addTaskDialog"
      modifier="rowfooter"
      title='Add A Task'
      :footer="{
        Cancel: () => {addTaskDialog = false; newTask = ''},
        Ok: () => {addTaskDialog = false; confirmAddTask();}
      }"
    >
      <v-ons-input placeholder="New Task" float v-model="newTask" />
    </v-ons-alert-dialog>
  </v-ons-page>
</template>

<script>
import stateServices from '../StateServices/StateServicesIndex';
import TodoList from './TodoList';

export default {
  name: 'activeTasks',
  data() {
    return {
      addTaskDialog: false,
      newTask: '',
    };
  },
  methods: {
    showAddTaskDialog() {
      this.addTaskDialog = true;
    },
    confirmAddTask() {
      stateServices.addTaskToState(this.newTask);
      this.newTask = '';
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
};
</script>

<style lang="css" scoped>
.projectHeader {
  text-align: center
}
</style>
