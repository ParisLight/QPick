<template>
	<div class="item">
		
		<div v-if="!item.price" class="item__wrapper">
			<a href="#" class="link">
				<div class="img-wrapper">
					<img :src="`./src/assets/${item.img}`" alt="item" class="item-img">
				</div>

				<div 
					class="item__description item__covers">
				<div v-if="item.name"
					class="description">
					{{ item.name }}
				</div>
			</div>
			</a>
			
		</div>
		
		<div v-if="item.price" class="item__wrapper">
			<img src="@/assets/liked.svg" alt="like" class="like item__like">
			<div class="wrap">
				<div class="img-wrapper">
					<img :src="`./src/assets/${item.img}`" alt="item" class="item-img">
				</div>
				
				<div class="item__description">
					<div v-if="item.name" class="description">
						{{ item.name }}
					</div>
				
					<div v-if="item.price && !item.oldPrice" class="price">
						{{ item.price }} ₸
					</div>
				
					<div v-if="item.oldPrice" class="price">
						{{ item.price }} ₸
						<div class="old-price" v-if="item.oldPrice"> {{ item.oldPrice }} ₸ </div>
					</div>
				
					<div class="sale" v-if="item.sale">
						<div v-if="item.price" class="price sale__price">
							{{ item.price }} ₸
							<div class="old-price sale__old-price" v-if="item.oldPrice">
								<div class="sale__olde-price-inner">
									{{ item.oldPrice }} ₸
								</div>
							</div>
						</div>
					</div>
					<div v-if="item.sale" class="sale-percent">-{{ item.percent }}%</div>
				</div>
				
				<div class="grade">
					<img src="@/assets/star.svg" alt="star">
					<div class="rate item__rate">{{ item.grade }}</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {

	props: {
		item: {
			type: Object,
		},
		
	},

	data(){
		return {
			
		}
	},

	computed: {
		
	}

}
</script>

<style lang="scss">
.wrap{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
}
.item{
	background: #fff;
	border-radius: 30px;
	max-width: 350px;
	min-height: 407px;
		&__wrapper{
			padding: 15.35px 21px 32.65px 22px;
			// text-align: center;
			height: 100%;
		}

		&__description{
			display: flex;
			justify-content: space-between;
			
		}

		&__rate{
			text-align: left;
		}

		&__covers{
			justify-content: center;
		}

		&-img{
			margin-bottom: 55px;
			object-fit: fill;
			max-width: 220px;
			min-height: 238px;
			object-fit: contain;
		}

		&__like{
			display: block;
		}
	}

	.img-wrapper{
		text-align: center;
		min-height: 240px;
		
	}

	.grade{
		max-width: 60.5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 25px;
	}
	.sale{
		display: flex;
		justify-content: space-between;

		&__old-price{
			color: #DF6464;
		}

		&__old-price-inner{
			color: #AAAAAA;
		}
	}

	.sale-percent{
		font-weight: 600;
		line-height: 19.86px;
		color: #DF6464;

	}
	.old-price{
		text-decoration: line-through 2px;
		color: #FFCE7F;
		text-align: center;
		font-size: 13px;
	}
	.description{
		font-size: 17px;
		font-weight: 600;
		line-height: 20.72px;
		color: #1C1C27;
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
		position: relative;
	}
</style>