<template>
	<div class="list-img list-img__current">
		<div class="background">
			<div class="img-top">
				
				<img :src="props.product?.addFavorites ? imgLiked : imgLike" alt="like" class="like"
				 @click="props.product.addFavorites = !props.product.addFavorites, favoritesStoreUse.addProduct(props.product, product.addFavorites)">
				<img src="../assets/Product/Ldnio.png" alt="Ldnio">
			</div>
			<div class="list">
				<div class="product-img" v-for="img in props.product?.imgArray" :key="img">
					<img :src="imgUrl(img)" alt="img">
				</div>
			</div>

			<div class="item__description">
				<span class="product-name list-img__product-name">
					{{ props.product.name }}
				</span>
			
				<div v-if="props.product.price && !props.product.newPrice" class="price">
					{{ props.product.price }} ₸
				</div>
			
				<div class="newPrice" v-if="props.product.newPrice && !props.product.sale">
					<div class="newPrice-count price ">
						{{ props.product.newPrice }}₸
					</div>
					<div class="newPrice__price">
						{{ props.product.price }} ₸
					</div>
				</div>
			
				<div class="sale" v-if="props.product.sale">
					<div class="newPrice sale__newPrice">
						<span class="newPrice-count sale__newPrice-count">
							{{ props.product.newPrice }}₸
						</span>
			
						<div class="newPrice__price sale__newPrice-wrapper">
							<div class="sale__newPrice-inner">{{ props.product.price }} ₸</div>
						</div>
					</div>
					<div class="sale-percent">-{{ props.product.sale }}%</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script setup>
import { FavoritesStore } from '@/stores/favoritesStore.js';
const favoritesStoreUse = FavoritesStore();
	const props = defineProps({
	product: {
		type: Object,
	},
})

const imgLike = new URL(`../assets/mainPage/like.svg`, import.meta.url);
const imgLiked = new URL(`../assets/mainPage/liked.svg`, import.meta.url);


const imgUrl = (img) => new URL(`../assets/mainPage/${img}`, import.meta.url);

</script>

<style scoped lang="scss">
.list-img{
	&__product-name{
		margin-top: 38px;
	}

	&__current{
		margin-top: 20px;
	}
}

.background {
	background: #FFFFFF;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
	border-radius: 30px;
	max-height: 668px;
	height: 100%;
	padding: 20px 25px 27px 35px;
}

.img-top{
	align-items: center;
	display: flex;
	justify-content: space-between;
}

.list{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	max-width: 853px;
	
}

.like{
	cursor: pointer;
}

.product-img{
	display: flex;
	justify-content: center;
	max-width: 250px;
	max-height: 250px;
	object-fit: cover;
	margin: 0 auto;
}

.product-name{
	font-weight: 600;
	font-size: 25px;
	line-height: 30px;
	color: #1C1C27;
	display: block;
}

.item {

	&__description {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
}


.newPrice {
	&__price {
		text-decoration: line-through 2px;
		color: #FFCE7F;
		text-align: center;
		font-size: 13px;
	}
}

.price {
	color: $active-color;
	font-size: 17px;
	font-weight: 600;
}


.sale {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	&-percent {
		font-weight: 600;
		line-height: 19.86px;
		color: #DF6464;
	}

	&__newPrice {
		margin-right: 25px;

		&-count {
			color: #DF6464;
			font-size: 19.17px;
			font-weight: 600;
		}

		&-wrapper {
			color: #DF6464;
		}

		&-inner {
			color: #AAAAAA;
		}
	}
}
</style>