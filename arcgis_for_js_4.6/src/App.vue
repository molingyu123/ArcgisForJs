<template>
  <div id="app">
    <h4>{{msg}}</h4>
    <Nav class="nav" :navData='navData'></Nav>
    <router-view/>
  </div>
</template>

<script>

import Nav from './components/Nav'

export default {
  data () {
    return {
      msg: 'Arcgis for JavaScript 4.6 Recode',
      navData: [
        { route: '/', name: '加载底图' },
        { route: '/tileLayer', name: '瓦片图层' },
        { route: '/featureLayer', name: '要素图层' }
      ]
    }
  },
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
