import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import HomeView from '../views/homeView.vue'
import Banner from '../components/banner.vue'
import Navigation from '../components/navigation.vue'
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: HomeView },
    { path: '/type/:type', component: HomeView }
  ]
})
