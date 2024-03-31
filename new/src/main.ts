
import { createPinia } from 'pinia';
import { createApp } from 'vue'

import App from '@/App.vue'
import TextComponent from './components/utils/TextComponent.vue';
import router from '@/router'

import './styles/main.sass';

const app = createApp(App)

app.component('TextComponent', TextComponent);


app.use(router).use(createPinia()).use
app.mount('#app')