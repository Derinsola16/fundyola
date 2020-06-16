<template>
  <span class="bv-badge text-sm ml-4 text-regular" :class="classes">
    {{ text }}
  </span>
</template>

<script>
// The `BvBadge` component is used to highlight information to a user.
// Content within the badge usually contains numbers or text.
// Can also be used as indicator when no content is passed into it
export default {
  name: "BvBadge",
  props: {
    // Text to display on the badge
    text: {
      type: String
    },
    // Class for background color of the badge
    type: {
      // `'primary'` / `'success'` / `'error'` / `'warning'` /`'info'`
      type: String,
      default: "primary",
      validator: value => {
        return ["success", "error", "warning", "primary"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    classes() {
      return this.type !== "info"
        ? `bg-${this.type} text-white`
        : "bg-grey-200";
    }
  }
};
</script>

<style lang="scss">
.bv-badge {
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // text-align: center;
  // border-radius: 50% !important;
  // height: 20px;
  // width: 20px;

  width: 20px;
  height: 20px;
  // background-color: #096dd9;
  box-shadow: 0px 1px 2px #00000008;
  border-radius: 100%;
  text-align: center;
  padding: 0rem 3px;
  // color: #ffffff;
  font-size: 10px;
  position: relative;
  top: 0.2rem;
  left: -2.2rem;
}
// @import "../scss/components/bv-badge";
</style>
