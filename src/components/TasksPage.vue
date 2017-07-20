<template>
  <v-ons-page>
    <v-ons-tabbar :tabs="tabs" position="top">
    </v-ons-tabbar>
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
import TasksListPage from './TasksListPage';
import stateServices from '../StateServices/StateServicesIndex';

export default {
  name: 'TasksPage',
  data() {
    return {
      addTaskDialog: false,
      newTask: '',
      tabs: [
        {
          label: 'Active',
          page: TasksListPage,
          active: true,
          props: {
            taskCompletedStatus: false,
            listHeader: 'Active Tasks',
            listIcon: 'ion-android-checkbox-outline-blank',
            showDeleteAll: false,
          },
        },
        {
          label: 'Complete',
          page: TasksListPage,
          props: {
            taskCompletedStatus: true,
            listHeader: 'Completed Tasks',
            listIcon: 'ion-android-checkbox-outline',
            showDeleteAll: true,
          },
        },
      ],
    };
  },
  methods: {
    showAddTaskDialog() {
      if (this.$Store.getters.projectListGetter.length > 0) {
        this.addTaskDialog = true;
      } else {
        this.$ons.notification.alert('Please create a project first');
      }
    },
    confirmAddTask() {
      stateServices.addTaskToState(this.newTask);
      this.newTask = '';
    },
  },
  components: {
    TasksListPage,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
