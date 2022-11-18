<template>
	<div class="container">
		<Header />
		<div class="content">
			<h3 class="title basket__title">Корзина</h3>
			<div class="basket" v-if="!basketStoreUse.basket.length">
				<div class="empty-basket">
					<img src="../assets/BasketPage/BasketMain.png" alt="basket-main" class="main-img basket__main-img">
					<div class="description basket__description">
						<span class="title-main">Корзина пуста</span>
						<div class="time-change">Но это никогда не поздно исправить :)</div>
					</div>
					<router-link to="/Home" class="link button basket__button">В каталог товаров</router-link>
				</div>
				
			</div>
			<div v-else class="basket-current">
				<div class="basket-leftside">
					<div class="product basket__product" v-for="product in basketStoreUse.basket" :key="product.id">
						<img src="../assets/BasketPage/Delete.svg" class="img-delete" alt="delete" @click="basketStoreUse.deleteBasketProduct(product)">
						<div class="product-main">
						
							<img :src="imgUrl(product.img)" alt="product-img" class="product-img">
							<div class="product-description">
								<span class="product-name basket__product-name">{{ product.name }}</span>
								<span class="product-price">{{ product.newPrice ? product.newPrice : product.price }} ₸</span>
							</div>
						</div>
						<div class="product-bottom">
							<div class="product-buttons">
								<img src="../assets/BasketPage/minus.svg" alt="minus" @click="basketStoreUse.minusProduct(product)">
								<span class="count-value">{{ product.currentCount }}</span>
								<img src="../assets/BasketPage/plus.svg" alt="plus" @click="basketStoreUse.plusProduct(product)">
					
							</div>
							<span class="product-price">{{ basketStoreUse.getSumCurrentProduct(product) }} ₸</span>
						</div>
						
					</div>
				</div>
				<div class="basket-rightside">
					<div class="result-sum">
						<div class="result-top">
							<span class="result">ИТОГО</span>
							<span class="result-price">₸ {{ basketStoreUse.currentSum }} </span>
						</div>
						<div class="result-bottom">
							<router-link class="link button" to="#">Перейти к оформлению</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script setup>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { BasketStore } from '@/stores/basketStore.js';


const basketStoreUse = BasketStore();

const imgUrl = (img) => new URL(`../assets/mainPage/${img}`, import.meta.url);

</script>

<style scoped lang="scss">
.title{
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: #1C1C27;
}
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

	&__product-name{
		margin-bottom: 12px;
	}

	&__button{
		max-width: 540px;
		max-height: 65px;
		padding: 21px 172px;
		margin: 0 auto;
		margin-top: 30px;
	}

	&__title{
		margin-top: 30px;
		margin-bottom: 13px;
	}

	&__product{
		margin-bottom: 13px;
	}

	&-leftside{
		flex-grow: 1;
	}

	&-current{
		display: flex;
		justify-content: space-between;
	}
}

.count{
	&-minus{
		color: #fff;
		background: #FFCE7F;
		padding: 14px 14px;
		border-radius: 50%;
		flex-grow: 1;
	}
}

.title-main {
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

.product{
	max-width: 633px;
	max-height: 218px;
	background: #fff;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
	border-radius: 30px;
	padding: 18px 18px 28px 17px;
	position: relative;
	&-img{
		max-width: 147px;
		max-height: 136px;
		flex-grow: 1;
		object-fit: contain;
	}

	&-name{
		font-weight: 500;
		font-size: 17px;
		line-height: 21px;
		color: #1C1C27;
	}

	&-price{
		font-weight: 600;
		font-size: 15px;
		line-height: 18px;
		color: #AAAAAA;
	}

	&-description{
		display: flex;
		flex-direction: column;
	}

	&-main{
		display: flex;
		align-items: center;
		max-width: 314px;
		justify-content: space-between;
		margin-bottom: 17px;
	}

	&-bottom{
		display: flex;
		justify-content: space-between;
	}

	&-buttons{
		max-width: 147px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
}

.count-value{
	font-weight: 600;
	font-size: 17px;
	line-height: 21px;
	color: #000000;
}

.result{
	&-sum{
		max-height: 120px;
		max-width: 350px;
		background: #FFFFFF;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		border-radius: 30px;
	}

	&-top{
		display: flex;
		justify-content: space-between;
		padding: 21px 16px 15px 21px;
		font-weight: 600;
		font-size: 15px;
		line-height: 18px;

	}
}

.img-delete{
	position: absolute;
	right: 18px;
	cursor: pointer;
}


.button {
	color: #fff;
	background: #101010;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	display: block;
	font-weight: 600;
	font-size: 17px;
	line-height: 21px;
	padding: 24px 63px 20px 63px;
}



</style>