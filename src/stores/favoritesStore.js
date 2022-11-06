import { defineStore } from "pinia";

export const FavoritesStore = defineStore('favoritesStore', {
	state: () => ({
		favoritesArray: [],
	}),

	actions: {
		addProduct(target, flag){
			flag ? this.favoritesArray.push(target) : this.favoritesArray = this.favoritesArray.filter(product => product.id != target.id);
		}
	}
})