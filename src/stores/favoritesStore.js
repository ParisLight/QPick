import { defineStore } from "pinia";

export const FavoritesStore = defineStore('favoritesStore', {
	state: () => ({
		favoritesArray: [],
		headphone: [],
		wireless: [],
		covers: [],
	}),

	actions: {
		addProduct(target, flag){
			if(flag){
				this.favoritesArray.push(target);
				if(target.category == 'Наушники'){
					this.headphone.push(target)
					console.log(this.headphone + 'headphone');
				}
				if(target.category == 'Беспроводные'){
					this.wireless.push(target)
					console.log(this.wireless + 'wireless');
				}
				if(target.category == 'Чехлы'){
					this.covers.push(target)
					console.log(this.covers + 'covers');
				}
			}
			else{
				this.favoritesArray = this.favoritesArray.filter(product => product.id != target.id);
				this.headphone = this.headphone.filter(product => product.id != target.id);
				this.wireless = this.wireless.filter(product => product.id != target.id);
				this.covers = this.covers.filter(product => product.id != target.id);
			} 
		}
	}
})