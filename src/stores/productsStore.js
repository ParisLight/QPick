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
			addFavorites: false,
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
			addFavorites: false,

		},
		{
			id: 3,
			name: "Apple EarPods",
			img: 'Apple EarPods2.png',
			price: 2323,
			grade: '4.7',
			category: 'Наушники',
			addFavorites: false,
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
			addFavorites: false,
		},
		{
			id: 5,
			name: "Apple EarPods",
			img: 'Apple EarPods.png',
			price: 2322,
			grade: '4.7',
			category: 'Наушники',
			addFavorites: false,
		},
		{
			id: 6,
			name: "Apple EarPods",
			img: 'Apple EarPods2.png',
			price: 2323,
			grade: '4.7',
			category: 'Наушники',
			addFavorites: false,
		},
	],

	wireless: [
		{ id: 7, name: 'Apple AirPods', img: 'Airpods.png', price: 2323, grade: '4.7', addFavorites: false, category: 'Беспроводные',},
		{ id: 8, name: 'GERLAX GH-04', img: 'Gerlax gh-04.png', price: 2323, grade: '4.7', addFavorites: false, category: 'Беспроводные',},
		{ id: 9, name: 'BOROFONE BO4', img: 'borofone bo4.png', price: 2323, grade: '4.7', addFavorites: false, category: 'Беспроводные',},
	],
	coversList: [
		{ id: 10, name: 'Стеклянные', img: 'glasses.png', category: 'Чехлы'},
		{ id: 11, name: 'Силиконовые', img: 'silicone.png', category: 'Чехлы'},
		{ id: 12, name: 'Кожаные', img: 'leather.png', category: 'Чехлы'},
	],

	currentProduct: null,
}),

actions: {
	viewProduct(item){
		this.currentProduct = item;
		console.log(this.currentProduct)
	}
}
})

