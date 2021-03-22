import { createApp } from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui';
import App from './App.vue'
import store from './store'


const app = createApp(App)
app.use(store);
app.mount('#app')

