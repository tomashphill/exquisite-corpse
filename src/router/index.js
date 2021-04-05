import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import IncompletedCorpses from '../views/IncompletedCorpses.vue'
import CompletedCorpse from '../views/CompletedCorpse.vue'
import CorpseBody from '../views/corpse-creater/CorpseBody.vue'
import CorpseHead from '../views/corpse-creater/CorpseHead.vue'
import CorpseLegs from '../views/corpse-creater/CorpseLegs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/completed-corpse',
    name: 'CompletedCorpse',
    component: CompletedCorpse
  },  {
    path: '/incompleted-corpses',
    name: 'IncompletedCorpses',
    component: IncompletedCorpses
  }, {
    path: '/corpse-head',
    name: 'CorpseHead',
    component: CorpseHead
  }, {
    path: '/corpse-body/:name',
    name: 'CorpseBody',
    component: CorpseBody
  }, {
    path: '/corpse-legs/:name',
    name: 'CorpseLegs',
    component: CorpseLegs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
