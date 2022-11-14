import { defineStore } from "pinia";
import { ref } from "vue";

export const BasketStore = defineStore('basketStore', {
	state: () => ({
    basket: [],
  }),

  actions: {
    addBasketProduct(product){
      this.basket.includes(product) ? console.log('already exists') : this.basket.push(product); 
    }
  }
})
