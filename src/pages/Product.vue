<template>
	<div class="container">
		<Header />
		<div class="content">
			<div class="product">
				<div class="title">
					{{ productsStore.name }}
				</div>
				<ListImg 
					:product="productsStore.currentProduct"
					:list-img="productsStore.imgArray"
				/>	
			</div>
		</div>
		<Footer />
	</div>
</template>

<script setup>

import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue";
import { useStore } from "@/stores/productsStore.js"
import ListImg from "../components/ListImg.vue";

const productsStore = useStore();
</script>

<style lang="scss">
	.product{

	}

	
</style>