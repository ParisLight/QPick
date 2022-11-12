<template>
	<div class="product">
		<div class="container">
			<Header />
			<div class="content">
				<div class="product">
					<div class="title">
						{{ productsStore.currentProduct.category }}
					</div>
					<ListImg :product="productsStore.currentProduct" :list-img="productsStore.imgArray" />
					<div class="product-bottom">
						<ProductCharacters :array-characters="productsStore.currentProduct.characters" />
						<div class="product-buttons">
							<router-link to="/#" class="link button product__buy-button">Купить!</router-link>
							<router-link to="/#Basket" class="link button product__basket-button">Добавить в корзину</router-link>
						</div>
					</div>
					
				</div>
			</div>
			<Footer />
		</div>
	</div>
	
</template>

<script setup>

import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue";
import ListImg from "../components/ListImg.vue";

import { useStore } from "@/stores/productsStore.js";
import { FavoritesStore } from "@/stores/favoritesStore.js";
import ProductCharacters from "../components/ProductCharacters.vue";

const productsStore = useStore();

const favoritesStoreUse = FavoritesStore();
</script>

<style scoped lang="scss">
.title{
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: #838383;
}

.product{
	&__buy-button{
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
		padding: 13px 87px 14px 88px;
		margin-bottom: 18px;
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
		border-radius: 10px;
	}

	&__basket-button{
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
		padding: 13px 16px;
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
		border-radius: 10px;
	}
}

.product-bottom{
	display: flex;
	justify-content: space-between;
	margin-top: 23px;
	margin-bottom: 19px;
	
}
</style>