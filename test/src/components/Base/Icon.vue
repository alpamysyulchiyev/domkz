<template>
  <i v-if="icon" className="icon" :class="[icon]"/>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.icon {
  height: 28px;
  width: 28px;
  cursor: pointer;
}

i.icon {
  display: inline-block;
  background: currentColor;
}

.menu {
  @extend i, .icon;
  -webkit-mask-image: url(/icons/menu.svg);
  mask-image: url(/icons/menu.svg);
}

.search {
  @extend i, .icon;
  -webkit-mask-image: url(/icons/search.svg);
  mask-image: url(/icons/search.svg);
}

.file {
  @extend i, .icon;
  -webkit-mask-image: url(/icons/file.svg);
  mask-image: url(/icons/file.svg);
}

.star {
  @extend i, .icon;
  -webkit-mask-image: url(/icons/star.svg);
  mask-image: url(/icons/star.svg);
}
</style>
