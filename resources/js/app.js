import './bootstrap';
import { createApp } from 'vue';
import headerComponent from './components/header-component.vue';

const app = createApp({});
app.component('header-component', headerComponent)

app.mount("#app");