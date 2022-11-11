<template>
	<div class="list-img">
		<div class="background">
			<div class="img-top">
				<img :src="props.product?.addFavorites ? imgLiked : imgLike" alt="like"
				 @click="props.product.addFavorites = !props.product.addFavorites, favoritesStoreUse.addProduct(props.product, product.addFavorites)">
				<img src="../assets/Product/Ldnio.png" alt="Ldnio">
			</div>
			<div class="list">
				<div class="product-img" v-for="img in props.product?.imgArray" :key="img">
					<img :src="imgUrl(img)" alt="img">
				</div>
			</div>
			<span class="product-name">
				{{ props.product.name }}
			</span>
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

.product-img{
	display: flex;
	justify-content: center;
	max-width: 250px;
	max-height: 250px;
	object-fit: cover;
	margin: 0 auto;
}
</style>