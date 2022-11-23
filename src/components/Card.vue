<template>
	<div class="item">
		<div v-if="!props.item.price" class="item__wrapper">
			
			<a href="#" class="link item__link">
				<div class="img-wrapper">
					<img :src="imgProduct" alt="item" class="item-img">
				</div>

				<div class="item__description item__covers">
					<div v-if="props.item.name"
						class="description">
						{{ props.item.name }}
					</div>
				</div>
			</a>
		</div>
		
		<div v-if="props.item.price" class="item__wrapper">
			<div class="like item__like"
				@click="favStore.addProduct(props.item, props.item.addFavorites)">
				<img  
					@click="props.item.addFavorites = !props.item.addFavorites"
					:src="props.item.addFavorites ? imgLiked : imgLike" alt="like">
			</div>
			
			
				<router-link @click="productsStoreUse.viewProduct(item)" :to="`/Product/${props.item.id}`" class="img-wrapper link">
					<img :src="imgProduct" alt="item" class="item-img">
				</router-link>
				<router-link to="/Product" class="item-bottom link">
					<div class="item__description">
						<div v-if="props.item.name" class="description">
							{{ props.item.name }}
						</div>
					
						<div v-if="props.item.price && !props.item.newPrice" class="price">
							{{ props.item.price }} ₸
						</div>
					
						<div class="newPrice" v-if="props.item.newPrice && !props.item.sale">
							<div class="newPrice-count price ">
								{{ props.item.newPrice }}₸
							</div>
							<div class="newPrice__price">
								{{ props.item.price }} ₸
							</div>
						</div>
					
						<div class="sale" v-if="props.item.sale">
							<div class="newPrice sale__newPrice">
								<span class="newPrice-count sale__newPrice-count">
									{{ props.item.newPrice }}₸
								</span>
					
								<div class="newPrice__price sale__newPrice-wrapper">
									<div class="sale__newPrice-inner">{{ props.item.price }} ₸</div>
								</div>
							</div>
							<div class="sale-percent">-{{ props.item.sale }}%</div>
						</div>
					</div>
					
						<div class="grade">
							<img src="@/assets/mainPage/star.svg" class="star" alt="star">
							<span class="rate item__rate">{{ props.item.grade }}</span>
						</div>
					</router-link>
				</div>
	</div>
</template>

<script setup>
import { useStore } from "@/stores/productsStore.js";
import { FavoritesStore } from "@/stores/favoritesStore.js";

const props = defineProps({
	item: {
		type: Object,
	},
});


const productsStoreUse = useStore();
const favStore = FavoritesStore();

const imgProduct = new URL(`../assets/mainPage/${props.item.img}`, import.meta.url)
const imgLike = new URL(`../assets/mainPage/like.svg`, import.meta.url);
const imgLiked = new URL(`../assets/mainPage/liked.svg`, import.meta.url);

</script>

<style scoped lang="scss">
.item{
	background: #fff;
	border-radius: 30px;
	max-width: 350px;
	min-height: 407px;
	height: 100%;
	display: flex;
	flex-direction: column;
	
	&__link{
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}

	&-bottom{
		display: flex;
		flex-direction: column;
		height: 68px;
	}

	&__wrapper{
		padding: 15.35px 21px 32.65px 22px;
		min-height: 407px;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	&__description{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;	
	}

	&__covers{
		justify-content: center;
	}

	&-img{
		max-width: 220px;
		min-height: 238px;
		object-fit: contain;
	}
}


.newPrice{
	&__price{
		text-decoration: line-through 2px;
		color: #FFCE7F;
		text-align: center;
		font-size: 13px;
	}
}

.like{
	cursor: pointer;
	width: 20px;
	height: 20px;
	position: absolute;
}

.img-wrapper{
	text-align: center;
	margin-bottom: auto;
}

.grade{
	margin-top: auto;
	max-width: 60.5px;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;	
}

.sale{
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	&-percent{
		font-weight: 600;
		line-height: 19.86px;
		color: #DF6464;
	}

	&__newPrice{
		margin-right: 25px;

		&-count{
			color: #DF6464;
			font-size: 19.17px;
			font-weight: 600;
		}

		&-wrapper{
				color: #DF6464;
		}

		&-inner{
			color: #AAAAAA;
		}
	}
}

.description{
	font-size: 17px;
	font-weight: 600;
	line-height: 20.72px;
	color: #1C1C27;	
	align-items: flex-start;
}

.price{
	color: $active-color;
	font-size: 17px;
	font-weight: 600;
}

.rate{
	font-size: 17px;
	font-weight: 600;
	line-height: 20.72px;
	color: #838383;
}
</style>