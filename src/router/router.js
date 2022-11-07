import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/pages/MainPage.vue';
import Service from '@/pages/ServicePage.vue';
import Contacts from '@/pages/Contacts.vue';
import Basket from '@/pages/Basket.vue';
import Favorites from '@/pages/Favorites.vue';
import Product from '@/pages/Product.vue';

export default createRouter({
	history: createWebHashHistory(),

	routes: [
		{ path: '/Home', component: Home, alias: '/' },
		{	path: '/Service', component: Service },
		{ path: '/Contacts', component: Contacts },
		{ path: '/Basket', component : Basket },
		{ path: '/Favorites', component: Favorites },
		{ path: '/Product', component: Product},
	]
})