<template>
  <div class='hello'>
    <h4>{{msg}}</h4>
    <div ref="baseMap" class="baseMap"></div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader'
import { ServiceUrl } from './ServiceUrl'
const option = {
  url: ServiceUrl.apiUrl
}

export default {
  name: 'baseMap',
  data () {
    return {
      msg: 'Arcgis for JavaScript 4.6 Recode',
      map: '',
      view: ''
    }
  },
  mounted () {
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/TileLayer', 'dojo/domReady!'], option)
      .then(([Map, MapView, TileLayer]) => {
        let tileLayer = ServiceUrl.tileLayer.map(item => {
          return new TileLayer({ // 可配置属性，见TileLayer类
            id: item.id,
            url: item.url
          })
        })
        this.map = new Map({
          layers: tileLayer
        })
        this.view = new MapView({
          container: this.$refs.baseMap, // 视图的容器
          map: this.map, // Map的实例放入视图中
          center: [104.06, 30.67], // 初始显示的地图中心点，经纬度
          zoom: 10 // 当前地图缩放等级
        })
        console.log(this.view)
        console.log(this.map)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
/*引入css*/

@import 'https://js.arcgis.com/4.7/esri/css/main.css';
.baseMap {
  height: 90vh;
  width: 100vw;
}
</style>
