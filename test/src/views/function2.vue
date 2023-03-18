<template>
  <div class="page">
    <header class="header">
      <h2>Function 1</h2>
    </header>
    <main class="main">
      <VBlock title="Входные данные">
        <VInput v-model="string" label="Строка A"/>
      </VBlock>
      <VBlock title="Результат">
        {{result}}
      </VBlock>
    </main>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import VInput from '../components/V/Input.vue'
import VBlock from '../components/V/Block.vue'

let string = ref('')

let result = computed(() => {
  if(string.value.length > 2) return string.value.split('').reverse().join('').toLowerCase() === string.value.toLowerCase() ? 'ДА' : 'НЕТ'

})
</script>

<style scoped>

</style>
