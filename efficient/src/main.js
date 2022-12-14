import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'
Vue.use(ElementUI)

Vue.config.productionTip = false
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)

Vue.use(Button)
Vue.use(Select)

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
