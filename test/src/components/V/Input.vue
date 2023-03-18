<template>
  <div class="input">
    <label>{{label}}</label>
    <input :value="modelValue" @input="(e) => $emit('update:modelValue', e.target.value)" type="text">
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  label: String
})
</script>

<style lang="scss" scoped>
 .input {
   display: flex;
   flex-direction: column;
   gap: 8px;
   width: 250px;

   input {
     display: flex;
     border: 1px solid #cbc7c7;
     font-size: 24px;
     padding: 10px;
   }

   label {
     font-size: 14px;
   }
 }
</style>
