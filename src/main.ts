import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'
import App from './App/App.vue'
import '@/plugins/axios'
const pinia = createPinia()
const app = createApp(App)
import globalComponents from '@/plugins/globalComponents'
import { PrimeVue, ConfirmationService } from '@/plugins/prime'

globalComponents(app)

async function initApp() {
  app.use(pinia)
  app.use(PrimeVue, { ripple: true })
  app.use(ConfirmationService)
  // some logic with store data before mount
  app.use(router).mount('#app')
}

window.addEventListener('load', initApp)
