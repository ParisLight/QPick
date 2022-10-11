<template>
	<div class="item">
		
		<div v-if="!item.price" class="item__wrapper">
			<a href="#" class="link">
				<div class="img-wrapper">
					<img :src="`../assets/${item.img}`" alt="item" class="item-img">
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
			<img src="../assets/liked.svg" alt="like" class="like item__like">

			<div class="img-wrapper">	
				<img :src="`../assets/${item.img}`" alt="item" class="item-img">
			</div>
			
			<div 
				class="item__description">
				<div v-if="item.name"
					class="description">
					{{ item.name }}
				</div>
				
				<div v-if="item.price"
					class="price">
					{{ item.price }} ₸
				</div>
			</div>
			<div class="grade">
				<img src="@/assets/star.svg" alt="star">
				<div 
					class="rate item__rate">{{ item.grade }}</div>
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

.item{
	background: #fff;
	border-radius: 30px;
	max-width: 350px;
	
		&__wrapper{
			padding: 15.35px 21px 32.65px 22px;
			// text-align: center;
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
			max-width: 100%;
		}

		
	}

	.img-wrapper{
		text-align: center;
	}

	.grade{
		max-width: 60.5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 25px;
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