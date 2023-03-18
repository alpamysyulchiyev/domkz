<template>
<aside class="sidebar" :class="{'closedMenu': isClosed}">
  <div class="sidebar__header">
    <BaseIcon @click="isClosed = !isClosed" icon="menu"/>
<!--    <img src="@/assets/img/bar.png" alt="">-->
    <p class="sidebar__title">Functions</p>
  </div>
  <nav class="sidebar__menu">
    <router-link fetch class="sidebar__link" v-for="item in navList" :to="item.to">
      <BaseIcon :icon="item.icon"/>
      <p>{{item.name}}</p>
    </router-link>
  </nav>
</aside>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import BaseIcon from '@/components/Base/Icon.vue'
let isClosed = ref(false)
const navList = [
  {
    icon: 'search',
    to: '/',
    name: 'Function 1'
  },
  {
    icon: 'file',
    to: '/function2',
    name: 'Function 2'
  },
  {
    icon: 'star',
    to: '/function3',
    name: 'Function 3'
  }
]

onMounted(() => {
  window.innerWidth < 768 ? isClosed.value = true : false
})
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    gap:30px;
    max-width: 250px;
    width: 100%;
    background-color: #f6f6f6;
    transition: all .3s;
    user-select: none;
    position: relative;

    &__header {
      display: flex;
      gap:10px;
      align-items: center;
      background-color: deepskyblue;
      padding: 10px;
      color: white;
      transition: all .3s;


      img {
        width: 18px;
        height: 18px;
      }
    }

    &__menu {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    &__link {
      display: flex;
      align-items: center;
      padding: 10px;

      gap:14px;
      color: black;

      &:hover {
        background-color: #e8e8e8;
      }
    }

    .router-link-active, .router-link-exact-active  {
      background-color: #e8e8e8;
    }
  }

  .closedMenu {
    max-width: 50px;
    .sidebar__menu {
      left:-150px;
    }

    .sidebar__title {
      position: absolute;
      left:-150px;
    }
  }

</style>
