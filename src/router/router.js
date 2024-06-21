import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
import BlogView from '../pages/BlogView.vue'
import ShopView from '../pages/ShopView.vue'
import Produk from '../views/Produk.vue';
import Tugas from '../views/TugasView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/shop', name: 'shop', component: ShopView },
  { path: '/produk', name: 'produk', component: Produk },
  { path: '/tugas', name: 'tugas', component: Tugas },

  


]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router