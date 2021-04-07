import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import IncompletedCorpses from '../views/IncompletedCorpses.vue'
import CompletedCorpses from '../views/CompletedCorpses.vue'
import CorpseBody from '../views/corpse-creator/CorpseBody.vue'
import CorpseHead from '../views/corpse-creator/CorpseHead.vue'
import CorpseLegs from '../views/corpse-creator/CorpseLegs.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/completed-corpses',
    name: 'CompletedCorpses',
    component: CompletedCorpses
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
  base: process.env.BASE_URL,
  routes
})

export default router
