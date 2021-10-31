import {createRouter, createWebHashHistory } from 'vue-router'
import  routes  from '@/config/router.config'

let router = createRouter({
  history: createWebHashHistory(),
  fallback: false,
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'auto' };
    }
  },
});

router.beforeEach((to, from, next) => {

  next();
});

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    document.documentElement.scrollTop = 0;
  }
});

export default router;
