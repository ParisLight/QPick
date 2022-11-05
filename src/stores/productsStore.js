import { defineStore} from "pinia";


export const useStore = defineStore('products', {



state: () => ({
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

	wireless: [
		{ id: 7, name: 'Apple AirPods', img: 'Airpods.png', price: 2323, grade: '4.7'},
		{ id: 8, name: 'GERLAX GH-04', img: 'Gerlax gh-04.png', price: 2323, grade: '4.7'},
		{ id: 9, name: 'BOROFONE BO4', img: 'borofone bo4.png', price: 2323, grade: '4.7'},
	],
	coversList: [
		{ id: 10, name: 'Стеклянные', img: 'glasses.png', },
		{ id: 11, name: 'Силиконовые', img: 'silicone.png'},
		{ id: 12, name: 'Кожаные', img: 'leather.png'},
	],
}),


})

