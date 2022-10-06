<template>
	<div class="banner">
		<div class="banner__wrapper">
			<h1 class="main-title">Аксессуары для <br> {{ 'Iphone 13 Pro Max' }} </h1>
			<div class="banner__img">
				<img src="../assets/iPhone-13-Banner.png" alt="banner-img">
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.banner{
		background: $primary-color;
		border-radius: 30px;
		margin-top: 20px;
		&__wrapper{
			display: flex;
			max-width: 821px;
			padding: 0 15px;
			margin: 0 auto;
			align-items: center;
			justify-content: space-between;
		}

		&__img{
			// margin-right: 185px;
			max-height: 200px;
			overflow: hidden;
		}
	}

	.main-title{
		font-weight: 600;
		font-size: 30px;
		color: #fff;
		text-align: center;
		// margin-left: 228px;
	}
	
</style>