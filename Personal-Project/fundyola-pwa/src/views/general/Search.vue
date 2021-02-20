<template>
  <main>
    <h1>Search</h1>
    <landing />
  </main>
</template>

<script>
// @ is an alias to /src
import landing from "@/components/AppNav.vue";

export default {
  name: "Home",
  components: {
    landing
  }
};
</script>

<style scoped lang="scss"></style>
