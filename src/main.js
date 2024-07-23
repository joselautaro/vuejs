import './assets/main.css'
// Desde vue importá createApp
import { createApp } from 'vue'
// Desde pinia importá createPinias
import { createPinia } from 'pinia'

// Desde App.vue importá App (Componente principal)
import App from './App.vue'
import router from './router'

// Creamos una variable llamada app donde vamos a asignarle al componente Ap
const app = createApp(App)

// A la variable app, usará el módulo de Pinia 
app.use(createPinia())
// A la variable app, usará el módulo de router 
app.use(router)
// A la variable app, se montará el id de app (index.html)
app.mount('#app')
