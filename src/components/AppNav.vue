<template>
  <footer id="app-nav">
    <div class="d-flex justify-content-between">
      <div class="icons">
        <router-link
          to="/"
          class="link"
          :class="{
            'filled ': true,
            'active ': currentRoute == 'home'
          }"
        >
          <font-awesome-icon :icon="['fas', 'home']" size="lg" />
        </router-link>
      </div>

      <div class="icons">
        <router-link
          to="/category"
          class="link"
          :class="{
            'filled ': true,
            'active ': currentRoute == 'category'
          }"
        >
          <font-awesome-icon :icon="['far', 'list-alt']" size="lg" />
        </router-link>
      </div>

      <div class="icons">
        <router-link
          to="/profile"
          class="link"
          :class="{
            'filled ': true,
            'active ': currentRoute == 'profile'
          }"
        >
          <font-awesome-icon :icon="['fas', 'user']" size="lg" />
        </router-link>
      </div>

      <div class="icons">
        <router-link
          to="/search"
          class="link"
          :class="{
            'filled ': true,
            'active ': currentRoute == 'search'
          }"
        >
          <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-nav",
  data() {
    return {};
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app-nav {
  width: 100%;
  height: 48px;
  border-top: solid 1px #00000008;
  padding: auto;
  position: fixed;
  bottom: 0px;
  background-color: #ffffff;

  .icons {
    width: 90px;
    height: 48px;
    padding: 10px;
    text-align: center;

    .link.active {
      color: #ffb300;
      font-size: 16px;
    }

    .link {
      color: #b3b3b3;
      font-size: 16px;
    }
  }
}
</style>
