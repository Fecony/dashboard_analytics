import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { makeServer } from './server';

if (import.meta.env.MODE === 'development') {
    makeServer();
}
createApp(App).use(router).mount('#app');
