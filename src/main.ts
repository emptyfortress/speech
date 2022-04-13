import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { router } from '@/router/router'
import 'virtual:svg-icons-register'

import App from './App.vue'

const app = createApp(App)
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

app.mount('#app')
