import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/font/iconfont.css'
import '@/style/index.css'
import '@/style/common.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
