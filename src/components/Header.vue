<template>
	<header class="header">
		<div class="header__wrapper">
			<div class="logo header__logo">
				<a href="#" class="link">QPICK</a>
			</div>
			<div class="model header__model">
				<img class="phone header__phone" src="../assets/phone.svg" alt="phone">
				<select class="select header__select" name="" id="">
					<option disabled selected value="">Выбрать модель телефона</option>
					<option value="">Выбрать модель телефона</option>
					<option value="">Выбрать модель телефона</option>
				</select>
			</div>

			<div class="info header__info">
				<div class="header__img-wrapper">
					<a href="#" class="link">
						<img class="favorites-img header__svg" src="../assets/like.svg" alt="favorites">
						<div class="counter">
							{{ 2 }}
						</div>
					</a>
					
					
				</div>
				<div class="header__img-wrapper header__basket-img-wrapper">
					<a href="#" class="link">
						<img class="basket-img header__svg" src="../assets/basket.svg" alt="basket">
						<div class="counter">
							{{ 1 }}
						</div>
					</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data(){
		return{
			count: 0,
		}
	}
}
</script>

<style lang="scss">
.header{
		&__wrapper{
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: $primary-color;
			margin-top: 13px;
			margin-bottom: 17px;
		}

		&__logo{
			margin-right: 75px;
		}

		&__model{
			margin-right: auto;
		}

		&__select{
			margin-left: 15px;
		}

		&__img-wrapper{
			margin-right: 35px;
			position: relative;
		}

		&__svg{
			width: 23px;
			height: 23px;
		}
		&__basket-img{
			position: relative;
		}
		&__img-wrapper {
			position: relative;
		}
	}

	.counter{
		position: absolute;
		text-align: center;
		color: #fff;
		font-size: 15px;
		display: block;
		width: 17.4px;
		height: 17.4px;
		border-radius: 50%;
		background: #FFA542;
		position: absolute;
		right: -10px;
		top: -7px;
	}

	.logo{
		font-size: 25px;
		font-family: 'Montserrat';
		font-weight: 700;
		line-height: 30.48px;
		
	}

	.model{
		font-size: 15px;
		font-weight: 500;
		line-height: 18.29px;
		display: flex;
		justify-content: space-between;
	}

	.select{
		border: none;
		background: none;
		// appearance: none;
		// overflow: hidden;
		// background: url(../assets/arrowDown.svg) no-repeat right;
		&:focus{
			outline: none;
		}
	}
	.info{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>