import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import '@/assets/styles/main.scss'
import { router } from '@/router/router'
import 'virtual:svg-icons-register'
import VueClickAway from 'vue3-click-away'
// import '@/quasar.config.ts'
import { createRippleDirective } from 'vue-create-ripple'
import { createPinia } from 'pinia'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
// app.use(Quasar)
app.use(Quasar, {
	plugins: {
		Notify,
	}, // import Quasar plugins and add here
	/*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
})
app.use(router)
app.use(VueClickAway)
app.use(pinia)
const opts = { class: 'my-ripple-class' }
app.directive('AppRipple', createRippleDirective(opts))

app.mount('#app')
