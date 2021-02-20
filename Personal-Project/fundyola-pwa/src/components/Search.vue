<template>
  <main class="search">
    <header
      class="container d-flex justify-content-between py-16 width-100 align-items-center"
    >
      <form action="">
        <div class="wrapper">
          <i class="fas fa-search icon"></i>
          <input
            id="input-1"
            class="form-control"
            type="text"
            required
            placeholder="Search"
          />
        </div>
      </form>
      <router-link to="/cart">
        <div class="">
          <font-awesome-icon
            :icon="['fas', 'shopping-cart']"
            size="lg"
            class="link"
          />
        </div>
      </router-link>
    </header>
  </main>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: auto;
  overflow-x: hidden;
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 1000;
  opacity: 1;
  background-color: white;

  header {
    border-bottom: solid 1px #00000008;
  }
  .wrapper {
    position: relative;
  }

  .icon {
    position: absolute;
    left: 10px;
    top: 12px;
    color: #484848;
  }

  .form-control {
    width: 130px;
    box-sizing: border-box;
    border: 1px solid #484848;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 9px 10px 9px 30px;
    transition: width 0.4s ease-in-out;
  }

  .form-control:focus {
    width: 300px;
    border: 1px solid #ffb300;
  }

  .link {
    color: #484848;
    font-size: 25px;
  }
}
</style>
