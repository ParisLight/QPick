import { defineStore } from "pinia";


export const useStore = defineStore('main', {
	id: 'headphones',

	state: () => (
		{
			headphones: [
					{
						id: 1,
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 2321,
						grade: '4.7',
						category: 'Наушники',
						newPrice: 3527,
					},
					{
						id: 2,
						name: "Apple EarPods",
						img: 'Apple EarPods.png',
						price: 2322,
						grade: '4.7',
						category: 'Наушники',
						newPrice: 3527,
						sale: 20,
					},
					{
						id: 3,
						name: "Apple EarPods",
						img: 'Apple EarPods2.png',
						price: 2323,
						grade: '4.7',
						category: 'Наушники'
					},
					{
						id: 4,
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 3527,
						newPrice: 2927,
						sale: 20,
						grade: '4.7',
						category: 'Наушники',
					},
					{
						id: 5,
						name: "Apple EarPods",
						img: 'Apple EarPods.png',
						price: 2322,
						grade: '4.7',
						category: 'Наушники'
					},
					{
						id: 6,
						name: "Apple EarPods",
						img: 'Apple EarPods2.png',
						price: 2323,
						grade: '4.7',
						category: 'Наушники'
					},
				],
		}
	),

	getters: {

	},
	
	actions: {

	},
})