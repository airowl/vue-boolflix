import Vue from 'vue'
import App from './App.vue'

import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
