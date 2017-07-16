<template lang="html">
  <v-ons-page>
  </v-ons-page>
</template>

<script>
export default {
  name: 'activeTasks',
  computed: {
    dataLoaded() {
      return this.$Store.getters.dataLoadStatus;
    },
  },
};
</script>

<style lang="css">
</style>
