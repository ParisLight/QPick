import { defineStore } from "pinia";

export const BasketStore = defineStore('basketStore', {
	state: () => ({
    basket: [],
    currentSum: 0,
  }),

  getters: {
    getSum(){
      this.currentSum = 0;
      this.basket.forEach(item => item.newPrice ? this.currentSum += item.newPrice * item.currentCount : this.currentSum += item.price * item.currentCount);
      return this.currentSum;
    },
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
    },
    getSumCurrentProduct(product){
      return product.newPrice ? product.newPrice * product.currentCount : product.price * product.currentCount;
    },
  },

})
