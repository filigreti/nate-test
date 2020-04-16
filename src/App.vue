<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    async getApplications() {
      await this.$store.dispatch("fetchApplications");
    },
    async getStatistics() {
      await this.$store.dispatch("fetchStatistics");
    },
  },
  async created() {
    await this.getStatistics();
    await this.getApplications();
  },
};
</script>
