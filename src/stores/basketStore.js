import { defineStore } from "pinia";
import { ref } from "vue";

export const BasketStore = defineStore('basketStore', {
	state: () => ({
    basket: [],
    currentSum: null,
  }),

  getters: {
    getSum(){
      let result = 0;
      this.basket.forEach(item => item.newPrice ? result += item.newPrice :  result += item.price)
      return result;
    }
  },

  actions: {
    addBasketProduct(product){
      this.basket.includes(product) ? console.log('already exists') : this.basket.push(product); 
    },

    deleteBasketProduct(currentProduct){
      this.basket = this.basket.filter(product => product.id != currentProduct.id);
      currentProduct.currentCount = 1;
    },

    plusProduct(product){
      product.currentCount++;
    },
  
    minusProduct(product){
      if(product.currentCount > 1){
        product.currentCount--;
      } 
    }
  },
})
