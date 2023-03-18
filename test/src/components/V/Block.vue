<template>
  <div class="block">
    <h3 class="block__title">
      {{title}}
    </h3>
    <div class="block__body">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>

<style lang="scss" scoped>
  .block {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 15px  0;

    &__title {
      font-size: 32px;
      color: deepskyblue;
    }

    &__body {
      display: flex;
      gap: 20px;
    }
  }
</style>
