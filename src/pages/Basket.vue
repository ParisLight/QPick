<template>
	<div class="container">
		<Header 
		:basketCount="basketStore.basket.length"/>
		<div class="content">
			<div class="basket" v-if="!basketStore.basket.length">
				<div class="empty-basket">
					<img src="../assets/BasketPage/BasketMain.png" alt="basket-main" class="main-img basket__main-img">
					<div class="description basket__description">
						<span class="title">Корзина пуста</span>
						<div class="time-change">Но это никогда не поздно исправить :)</div>
					</div>
					<router-link to="/Home" class="link button basket__button">В каталог товаров</router-link>
				</div>
				<!-- <div class="basket-current">
					<div class="product">
						<img src="#" alt="product-img" class="product-img">
						<div class="product-description">
							<span class="product-name">Apple BYZ S852I</span>
							<span class="product-price">2 927 ₸</span>
						</div>
					</div>
				</div> -->
			</div>
		</div>
		<Footer />
	</div>
</template>

<script setup>

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { BasketStore } from '@/stores/basketStore.js';


const basketStore = BasketStore();

console.log(basketStore.basket.length);
// console.log(store);
</script>

<style scoped lang="scss">
.basket{
	text-align: center;
	max-width: 100%;
	&__main-img{
		max-width: 100%;
		margin-top: 61px;
	}

	&__description{
		margin-top: 30px;
	}

	&__button{
		max-width: 540px;
		max-height: 65px;
		padding: 21px 172px;
		margin: 0 auto;
		margin-top: 30px;
	}
}

.title {
	font-weight: 500;
	font-size: 30px;
	line-height: 37px;
}

.time-change {
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	color: #838383;
}

.button {
	color: #fff;
	background: #101010;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	display: block;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
}
</style>