import { createRouter, createWebHashHistory } from "vue-router";
import Home from './components/pages/MainPage.vue';
import Service from './components/pages/ServicePage.vue';

export default createRouter({
	history: createWebHashHistory(),

	routes: [
		{ path: '/Home', component: Home, alias: '/' },
		{	path: '/Service', component: Service },
	]
})