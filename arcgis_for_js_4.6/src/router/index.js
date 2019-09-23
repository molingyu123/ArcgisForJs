import Vue from 'vue'
import Router from 'vue-router'
import baseMap from '@/components/baseMap'
import tileLayer from '@/components/TileLayer'
import featureLayer from '@/components/featureLayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'baseMap',
      component: baseMap
    },
    {
      path: '/tileLayer',
      name: 'tileLayer',
      component: tileLayer
    },
    {
      path: '/featureLayer',
      name: 'featureLayer',
      component: featureLayer
    }
  ]
})
