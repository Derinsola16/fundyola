<template>
  <main class="home">
    <Search />
    <div class="container">
      <Modal />
      <div class="side">
        <div class="image-wrapper">
          <div class="mini-card">
            <img src="@/assets/image1.png" alt="" />
            <p>Gowns</p>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <img src="@/assets/image1.png" alt="" />
            <p>Gowns</p>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <img src="@/assets/image1.png" alt="" />
            <p>Gowns</p>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <img src="@/assets/image1.png" alt="" />
            <p>Gowns</p>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <img src="@/assets/image1.png" alt="" />
            <p>Gowns</p>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <img src="@/assets/image1.png" alt="" />
            <p>Gowns</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Search: () => import("@/components/Search.vue"),
    Modal: () => import("@/components/Modal.vue")
  }
};
</script>

<style scoped lang="scss">
.home {
  .image-wrapper {
    float: left;
    width: 33.33%;
    padding: 5px;
    display: flex;
    justify-content: space-evenly;
  }

  .side::after {
    content: "";
    clear: both;
    display: table;
  }

  .mini-card {
    background-color: rgb(223, 203, 139);
    width: 106.3px;
    height: 135px;
    border-radius: 8px;
    margin-bottom: 26px;
    padding: 10px;
  }
}
</style>
