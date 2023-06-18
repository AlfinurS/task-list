<template>
  <div class="wrapper" :style="iconWrapperStyle">
    <svg
      v-if="src === ''"
      class="image"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :viewBox="viewBox"
      :id="id"
    >
      <slot />
    </svg>
    <img v-else class="image" :src="src" alt="icon" />
  </div>
</template>

<script>
export default {
  name: "iconsWrapper",

  props: {
    width: {
      type: [Number, String],
      default: 38,
    },
    height: {
      type: [Number, String],
      default: 38,
    },
    viewBox: {
      type: String,
      default: "0 0 38 38",
    },
    id: {
      type: String,
      default: "icon",
    },
    src: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconWrapperStyle() {
      return `width: ${+this.width}px; height:${+this.height}px;`;
    },
  },
};
</script>

<style>
.wrapper {
  position: relative;
  overflow: hidden;
  background-color: rgba(202, 159, 255, 0.205);
  border-radius: 100px;
}
.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
}
</style>
