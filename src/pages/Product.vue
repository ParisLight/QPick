<template>
	<div class="container">
		<Header />
		<div class="content">
			<div class="product">
				<div class="title">{{ productsStore.currentProduct.name }}</div>
				<div class="title">{{ productsStore.currentProduct.category }}</div>				
			</div>
		</div>
		<Footer />
	</div>
</template>

<script setup>

import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue";
import { useStore } from "@/stores/productsStore.js"

const productsStore = useStore();
</script>

<style lang="scss">

</style>