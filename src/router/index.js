import { createRouter, createWebHistory } from 'vue-router'
import PlayView from '../views/PlayView.vue'
import RulesView from '../views/RulesView.vue'

const routes = [
  {
    path: '/',
    name: 'play',
    component: PlayView
  },
  {
    path: '/rules',
    name: 'rules',
    component: RulesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
