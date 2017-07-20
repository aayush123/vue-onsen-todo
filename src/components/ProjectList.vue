<template lang="html">
  <div>
    <v-ons-list>
      <v-ons-list-header>
        Your Projects
      </v-ons-list-header>
      <v-ons-list-item tappable ripple modifier="material" v-for="eachProject in projectList" :key="eachProject" @click="selectProject(eachProject)">
        <div class="left">
          <v-ons-icon :icon="eachProject === activeProject ? 'ion-ios-circle-filled' : 'ion-ios-circle-outline'" class="list-item__icon" />
        </div>
        <div class="center" @hold="longPress(eachProject)">
          {{eachProject}}
        </div>
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-alert-dialog cancelable :visible.sync="displayOptionsDialog" title='Project Options'>
      <v-ons-list>
        <v-ons-list-item tappable @click="showEditDialog">Edit</v-ons-list-item>
        <v-ons-list-item tappable @click="deleteProject">Delete</v-ons-list-item>
      </v-ons-list>
    </v-ons-alert-dialog>
    <v-ons-alert-dialog cancelable
      :visible.sync="displayEditDialog"
      modifier="rowfooter"
      title='Edit Task'
      :footer="{
        Cancel: () => {displayEditDialog = false; projectUnderEdit = ''; newProjectTitle = '';},
        Ok: () => {displayEditDialog = false; updateProject();}
      }"
    >
      <v-ons-input placeholder="Project Title" float v-model="newProjectTitle" />
    </v-ons-alert-dialog>
  </div>
</template>

<script>
import stateServices from '../StateServices/StateServicesIndex';

export default {
  name: 'ProjectList',
  data() {
    return {
      projectUnderEdit: '',
      newProjectTitle: '',
      displayOptionsDialog: false,
      displayEditDialog: false,
    };
  },
  computed: {
    projectList() {
      return this.$Store.getters.projectListGetter;
    },
    activeProject() {
      return this.$Store.getters.activeProjectGetter;
    },
  },
  methods: {
    selectProject(projectTitle) {
      stateServices.changeActiveProjectInState(projectTitle);
    },
    longPress(projectTitle) {
      this.projectUnderEdit = projectTitle;
      this.newProjectTitle = projectTitle;
      this.displayOptionsDialog = true;
    },
    showEditDialog() {
      this.displayOptionsDialog = false;
      this.displayEditDialog = true;
    },
    deleteProject() {
      this.displayOptionsDialog = false;
      stateServices.deleteProjectInState(this.projectUnderEdit);
      this.projectUnderEdit = '';
    },
    updateProject() {
      this.displayEditDialog = false;
      stateServices.updateProjectInState(this.projectUnderEdit, this.newProjectTitle);
      this.projectUnderEdit = '';
    },
  },
};
</script>

<style lang="css">
</style>
