import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import WorkDetail from '../views/WorkDetail.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  data() {
    return {
      
    }
  },
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
      props: true
    },
    {
      path: '/work/:id',
      name: 'work-detail',
      component: WorkDetail,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }

  ]
 
})

/* router.beforeEach((to, from, next) => {
  // Faites défiler la page vers l'élément avec l'ID spécifié
  const element = document.getElementById('viewtop');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Si l'élément avec l'ID spécifié n'est pas trouvé, faites défiler vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  next();
}) */

export default router
