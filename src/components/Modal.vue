<template>
  <main class="slider">
    <carousel
      :nav="false"
      :margin="15"
      :stagePadding="1"
      :loop="true"
      :items="4"
      :autoplay="true"
    >
      <img src="@/assets/image29.png" class="" />

      <img src="@/assets/image6.png" />

      <img src="@/assets/image5.png" />

      <img src="@/assets/image7.png" />

      <img src="@/assets/image29.png" class="" />

      <img src="@/assets/image1.png" />

      <img src="@/assets/image5.png" />

      <img src="@/assets/image7.png" />

      <img src="@/assets/image29.png" class="" />

      <img src="@/assets/image6.png" />

      <img src="@/assets/image5.png" />

      <img src="@/assets/image7.png" />

      <img src="@/assets/image29.png" class="" />

      <img src="@/assets/image9.png" />

      <img src="@/assets/image5.png" />

      <img src="@/assets/image7.png" />
    </carousel>
  </main>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel }
};
</script>

<style lang="scss" scoped>
.slider {
  .carousel-indicators > li {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: #ffb300;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: scale-down;
  }

  // .owl-dot.active {
  //   background-color: #ffb300 !important;
  // }

  .owl-theme .owl-dots .owl-dot span {
    background: #ffb300 !important;
  }
}
</style>
