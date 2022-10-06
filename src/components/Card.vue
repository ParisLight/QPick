<template>
	<div class="card">
		<div 
			v-if="card.img"
				class="card__wrapper">
			<img src="../assets/Apple BYZ S8521.png" alt="card" 	class="card-img">
			<div 
				class="card__description">
				<div
					v-if="card.name" 
					class="description">
					{{ card.name }}
				</div>
				<div 
				v-if="card.price"
					class="price">
					{{ card.price }} ₸
				</div>
			</div>
			<div class="grade">
				<img src="../assets/star.svg" alt="star">
				<div 
					class="rate card__rate">{{ card.grade }}</div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {

	props: {
		card: {
			type: Object,
		}
	},

	data(){
		return {

		}
	},

	computed: {
		getImgUrl(){
			return '../assets/' + card.img;
		}
	}
}
</script>

<style lang="scss">
.card{
	background: #fff;
	border-radius: 30px;
	max-width: 350px;
		&__wrapper{
			padding: 15.35px 21px 32.65px 22px;
			text-align: center;
		}

		&__description{
			display: flex;
			justify-content: space-between;
		}

		&__rate{
			text-align: left;
		}
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