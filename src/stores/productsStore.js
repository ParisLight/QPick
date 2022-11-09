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
			imgArray: ['Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png']
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
			imgArray: ['Apple EarPods.png','Apple EarPods.png','Apple EarPods.png','Apple EarPods.png','Apple EarPods.png']
		},
		{
			id: 3,
			name: "Apple EarPods",
			img: 'Apple EarPods2.png',
			price: 2323,
			grade: '4.7',
			category: 'Наушники',
			addFavorites: false,
			imgArray: ['Apple EarPods2.png','Apple EarPods2.png','Apple EarPods2.png','Apple EarPods2.png','Apple EarPods2.png']
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
			imgArray: ['Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png','Apple BYZ S8521.png']
		},
		{
			id: 5,
			name: "Apple EarPods",
			img: 'Apple EarPods.png',
			price: 2322,
			grade: '4.7',
			category: 'Наушники',
			addFavorites: false,
			imgArray: ['Apple EarPods.png','Apple EarPods.png','Apple EarPods.png','Apple EarPods.png','Apple EarPods.png']
		},
		{
			id: 6,
			name: "Apple EarPods",
			img: 'Apple EarPods2.png',
			price: 2323,
			grade: '4.7',
			category: 'Наушники',
			addFavorites: false,
			imgArray: ['Airpods.png','Airpods.png','Airpods.png','Airpods.png','Airpods.png']
		},
	],

	wireless: [
		{ id: 7,
			name: 'Apple AirPods', 
			img: 'Airpods.png', price: 2323, 
			grade: '4.7', 
			addFavorites: false, 
			category: 'Беспроводные', 
			imgArray: ['Airpods.png','Airpods.png','Airpods.png','Airpods.png','Airpods.png']},

		{ id: 8, 
			name: 'GERLAX GH-04', 
			img: 'Gerlax gh-04.png', 
			price: 2323, grade: '4.7', 
			addFavorites: false, 
			category: 'Беспроводные', 
			imgArray: ['Gerlax gh-04.png','Gerlax gh-04.png','Gerlax gh-04.png','Gerlax gh-04.png','Gerlax gh-04.png']},

		{ id: 9, 
			name: 'BOROFONE BO4', 
			img: 'borofone bo4.png', 
			price: 2323, grade: '4.7', 
			addFavorites: false, 
			category: 'Беспроводные', 
			imgArray: ['borofone bo4.png','borofone bo4.png','borofone bo4.png','borofone bo4.png','borofone bo4.png']},
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
	}
}
})

