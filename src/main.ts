import { createApp } from 'vue';
import './assets/style.css';
import Tres from '@tresjs/core';
import App from './App.vue';

const app = createApp(App);

app.use(Tres);

app.mount('#app');
