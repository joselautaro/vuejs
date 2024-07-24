import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home/Home.vue')
    },
    {
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      component: () => import('../components/ListaDeTareas/ListaDeTareas.vue')
    },
    {
      path: '/boton-dinamico',
      name: 'boton-dinamico',
      component: () => import('../components/BotonDinamico/BotonDinamico.vue')
    },
    {
      path: '/poke',
      name: 'poke',
      component: () => import('../components/PokeApi/PokeApi.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../components/Cart/Cart.vue')
    }
  ]
})

export default router
