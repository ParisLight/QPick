import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/pages/MainPage.vue';
import Service from '@/pages/ServicePage.vue';
import Contacts from '@/pages/Contacts.vue';
import Basket from '@/pages/Basket.vue';
import Favorites from '@/pages/Favorites.vue';
import Product from '@/pages/Product.vue';


// const Home = () =>  import ('@/pages/MainPage.vue');
// const Service = () => import ('@/pages/ServicePage.vue');
// const Contacts = () => import ('@/pages/Contacts.vue');
// const Basket = () => import ('@/pages/Basket.vue');
// const Favorites = () => import ('@/pages/Favorites.vue');
// const Product = () => import ('@/pages/Product.vue');

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/Main', 
			component: () => import('@/pages/Layout.vue'),
			children: [
				{ path: '/Home',
				  component: () =>  import ('@/pages/MainPage.vue'),
				  alias: '/'},

				{ path: '/Service',
				 component: () => import ('@/pages/ServicePage.vue')},

				{ path: '/Contacts',
				 component: () => import ('@/pages/Contacts.vue')},

				{ path: '/Basket',
				 component : () => import ('@/pages/Basket.vue')},

				{ path: '/Favorites',
				 component: () => import ('@/pages/Favorites.vue')},
				 
				{ path: '/Product/:id',
				 component: () => import ('@/pages/Product.vue')},
			]
		}
	]
})