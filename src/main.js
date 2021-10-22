import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'


import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'green',
  height: '6px'
})


import router from './router' 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
