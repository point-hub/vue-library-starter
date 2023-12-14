import { type App } from 'vue'
import BaseComponent from '@/components/base-component.vue'

export default {
  install(Vue: App) {
    Vue.component('BaseComponent', BaseComponent)
  }
}
