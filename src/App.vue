<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" :to="{name: 'Home'}">Home</router-link>
        <router-link class="navbar-brand" :to="{name: 'About'}">About</router-link>
       <!-- for example router view -->
        <router-view></router-view>
        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>
</nav>
  </div>
</template>

<script>
export default {
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach(() => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
}
</script>
<style>
</style>
