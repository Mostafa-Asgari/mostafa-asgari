import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Portfolio from '../pages/Portfolio.vue'
import Services from '../pages/Services.vue'
import Contact from '../pages/Contact.vue'
import Blog from '../pages/Blog.vue'
import Category from '../pages/Category.vue'
// توجه: Post را lazy-load می‌کنیم:
const Post = () => import('../pages/Post.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:slug', name: 'Post', component: Post, props: true },
  { path: '/blog/category/:slug', name: 'Category', component: Category },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
