<template lang="html">
  <div>
    <v-ons-list>
      <v-ons-list-header>
        {{listHeader}}
      </v-ons-list-header>
      <v-ons-list-item tappable ripple modifier="material" v-for="eachTask in tasks" :key="eachTask.taskId" v-if="eachTask.completed === completed">
        <div class="left" @click="toggleStatus(eachTask.taskId)">
          <v-ons-icon :icon="listIcon" class="list-item__icon" />
        </div>
        <div class="center" @hold="longPress(eachTask)">
          {{eachTask.taskTitle}}
        </div>
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-alert-dialog cancelable :visible.sync="displayOptionsDialog" title='Task Options'>
      <v-ons-list>
        <v-ons-list-item tappable @click="showEditDialog">Edit</v-ons-list-item>
        <v-ons-list-item tappable @click="deleteTask">Delete</v-ons-list-item>
      </v-ons-list>
    </v-ons-alert-dialog>
    <v-ons-alert-dialog cancelable
      :visible.sync="displayEditDialog"
      modifier="rowfooter"
      title='Edit Task'
      :footer="{
        Cancel: () => {displayEditDialog = false; taskUnderEdit = {};},
        Ok: () => {displayEditDialog = false; updateTask();}
      }"
    >
      <v-ons-input placeholder="New Task" float v-model="taskUnderEdit.taskTitle" />
    </v-ons-alert-dialog>
  </div>
</template>

<script>
import stateServices from '../StateServices/StateServicesIndex';

export default {
  data() {
    return {
      displayOptionsDialog: false,
      displayEditDialog: false,
      taskUnderEdit: {},
    };
  },
  props: ['completed', 'listHeader', 'listIcon'],
  computed: {
    activeProject() {
      return this.$Store.getters.activeProjectGetter;
    },
    tasks() {
      return this.$Store.getters.tasksForActiveProject(this.activeProject);
    },
  },
  methods: {
    toggleStatus(key) {
      stateServices.toggleTaskStatusInState(key);
    },
    longPress(task) {
      this.displayOptionsDialog = true;
      this.taskUnderEdit = Object.assign({}, task);
    },
    showEditDialog() {
      this.displayOptionsDialog = false;
      this.displayEditDialog = true;
    },
    deleteTask() {
      stateServices.deleteTaskInState(this.taskUnderEdit.taskId);
      this.displayOptionsDialog = false;
      this.taskUnderEdit = {};
    },
    updateTask() {
      stateServices.updateTaskInState(this.taskUnderEdit);
      this.taskUnderEdit = {};
    },
  },
};
</script>

<style lang="css">
</style>
