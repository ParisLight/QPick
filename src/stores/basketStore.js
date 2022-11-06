import { defineStore } from "pinia";
import { ref } from "vue";

export const BasketStore = defineStore('basketStore', {
	state: () => ({
    basket: [],
  }),

	
})