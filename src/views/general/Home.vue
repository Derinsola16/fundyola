<template>
  <main class="home">
    <Search />
    <div class="container">
      <Modal />
      <div class="side">
        <div class="image-wrapper" @click.prevent="$router.push('/cart')">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image2.png" alt="" />
              <p class="item-name">Wrist Watch</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image1.png" alt="" />
              <p class="item-name">Heels</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image9.png" alt="" />
              <p class="item-name">Gowns</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image1.png" alt="" />
              <p class="item-name">Shoe</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image5.png" alt="" />
              <p class="item-name">Sneakers</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image1.png" alt="" />
              <p class="item-name">Red Shoe</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image7.png" alt="" />
              <p class="item-name">Headset</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image1.png" alt="" />
              <p class="item-name">Red Pointed Shoe lace</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image22.png" alt="" />
              <p class="item-name">Coat</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image6.png" alt="" />
              <p class="item-name">Shirt</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image29.png" alt="" />
              <p class="item-name">Dress</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="mini-card">
            <div class="inner-wrapper">
              <img src="@/assets/image5.png" alt="" />
              <p class="item-name">Canvas</p>
              <p class="item-price">$20.58</p>
            </div>
          </div>
        </div>
      </div>

      <!-- <div>
        I have done deployment but we are having ssl issue and also we only have
        one server for now, that’s the production need to work on the staging
        server that the team can connect to as soon at I solve the ssl issue
      </div> -->
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
    // object-fit: cover;
    // display: flex;
    // justify-content: space-evenly;
  }

  .side::after {
    content: "";
    clear: both;
    display: table;
  }

  .mini-card {
    background-color: #ffffff;
    width: 106.3px;
    height: 144px;
    border-radius: 8px;
    padding: 5px;
    box-shadow: 2px 6px #e7eaf0 !important;
  }

  .item-name {
    padding-top: 16px;
    font-size: 12px;
    text-align: left;
    color: #3D3D3D;
    line-height: 17px;
  }

  .item-price {
    font-size: 10px;
    text-align: left;
    width: 31px;
    height: 10px;
    opacity: 100%;
    color: #3D3D3D;
    line-height: 15px;
    font-weight: bold;
  }

  p {
    margin: 0px !important;
  }

  .inner-wrapper {
    min-height: 150px;
    // min-width: 150px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    // display: table-cell;
    vertical-align: middle;
  }
}
</style>
