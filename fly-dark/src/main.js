import { createApp } from 'vue'
import App from './App.vue'
import {MotionPlugin} from '@vueuse/motion'
import './style.css'
createApp(App)
.use(MotionPlugin)
.mount('#app')
