<script setup>
import {ref, computed} from 'vue'
import VInput from '../components/V/Input.vue'
import VBlock from '../components/V/Block.vue'
let stringA = ref('Алпамыс')
let stringB = ref('Ал')
let a = Array.from("Tuesdayday".matchAll(/day/g));

let checkString = computed(() => {
  let regex = new RegExp(stringB.value.toLowerCase(), 'g')
  return Array.from(stringA.value.toLowerCase().matchAll(regex)).length
})
</script>

<template>
  <div class="page">
    <header class="header">
      <h2>Function 1</h2>
    </header>
    <main class="main">
      <VBlock title="Входные данные">
        <VInput v-model="stringA" label="Строка A"/>
        <VInput v-model="stringB" label="Строка B"/>
      </VBlock>
      <VBlock title="Результат">
        {{checkString}}
      </VBlock>
    </main>
  </div>
</template>

<style lang="scss">

</style>
