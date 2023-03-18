import { createRouter, createWebHistory } from 'vue-router'
import function1 from '../views/function1.vue'
import function2 from '../views/function2.vue'

import function3 from '../views/function3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'function1',
      component: function1
    },
    {
      path: '/function2',
      name: 'function22',
      component: function2
    },
    {
      path: '/function3',
      name: 'function2',
      component: function3
    }
  ]
})

export default router
