import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseIcon from '@/components/BaseIcon.vue'

Vue.component('BaseIcon', BaseIcon)

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
