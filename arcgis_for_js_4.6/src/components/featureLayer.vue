<template>
  <div class='hello'>
    <div ref="baseMap" class="baseMap"></div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader'
import { ServiceUrl } from './ServiceUrl'
const option = {
  url: ServiceUrl.apiUrl
}
window.dojoConfig = {
  has: {
    'esri-featurelayer-webgl': 1
  }
}
export default {
  name: 'baseMap',
  data () {
    return {
      map: '',
      view: ''
    }
  },
  mounted () {
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/TileLayer', 'esri/layers/FeatureLayer'], option)
      .then(([Map, View, TileLayer, FeatureLayer]) => {
        let baseMap = new Map({
          layers: [
            new TileLayer({
              id: 'TL0',
              url: ServiceUrl.baseMap
            })
          ]
        })
        // let feature = new FeatureLayer({
        //   id: 'FL0',
        //   url: ServiceUrl.featureLayer[0].url,
        //   outFields: ['*']
        // })
        let feature = ServiceUrl.featureLayer.map((item, index) => {
          let render
          if (index === 1) {
            render = {
              type: 'simple', // autocasts as new SimpleRenderer()
              symbol: {
                type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
                url: 'https://webapps-cdn.esri.com/Apps/MegaMenu/img/logo.jpg',
                width: '18px',
                height: '18px'
              }
            }
          }
          console.log(item.url)
          return new FeatureLayer({
            id: 'FL' + index,
            url: item.url,
            outFields: ['*'],
            renderer: render
          })
        })
        baseMap.addMany(feature)
        this.view = new View({
          container: this.$refs.baseMap, // 视图的容器
          map: baseMap, // Map的实例放入视图中
          center: [104.06, 30.67], // 初始显示的地图中心点，经纬度
          zoom: 10 // 当前地图缩放等级
        })
        console.log(this.view)
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
