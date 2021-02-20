<template>
  <div id="app">
    <router-view />
    <AppNav />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    AppNav: () => import("@/components/AppNav.vue")
  }
};
</script>

<style>
/* @import "~bootstrap/css/bootstrap"; */
@import "./scss/components/global.scss";
</style>
