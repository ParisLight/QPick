import { defineStore } from "pinia";
import { ref } from "vue";

export const BasketStore = defineStore('basketStore', {
	state: () => ({
    basket: [],
  }),

  actions: {
    addBasketProduct(product){
      this.basket.push(product);
    }
  }
})