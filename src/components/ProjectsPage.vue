<template>
  <v-ons-page>
    <v-ons-fab position="bottom right" @click="showCreateProjectDialog">
      <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>
    <ProjectList />
    <v-ons-alert-dialog cancelable
      :visible.sync="createProjectDialog"
      modifier="rowfooter"
      title='Create a Project'
      :footer="{
        Cancel: () => {createProjectDialog = false; newProject = ''},
        Ok: () => {createProjectDialog = false; confirmCreateProject();}
      }"
    >
      <v-ons-input placeholder="New Project" float v-model="newProject" />
    </v-ons-alert-dialog>
  </v-ons-page>
</template>

<script>
import ProjectList from './ProjectList';
import stateServices from '../StateServices/StateServicesIndex';

export default {
  name: 'ProjectsPage',
  components: {
    ProjectList,
  },
  data() {
    return {
      newProject: '',
      createProjectDialog: false,
    };
  },
  methods: {
    showCreateProjectDialog() {
      this.createProjectDialog = true;
    },
    confirmCreateProject() {
      stateServices.createProjectInState(this.newProject);
      this.newProject = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
