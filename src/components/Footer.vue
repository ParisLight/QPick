<template>
	<footer class="footer">
		<div class="footer__wrapper">
			<div class="logo footer__logo">
				<router-link class="link" to="/Home">QPICK</router-link>
			</div>
			<div class="links footer__links">
				<div class="footer__links--left">
					<a href="#" class="link footer__link--nav footer__link-active">
						Избранное
					</a>
					<a href="#" class="link footer__link--nav footer__link-active">
						Корзина
					</a>
					<a href="#" class="link footer__link--nav footer__link-active">
						Контакты
					</a>
				</div>
				<div class="footer__links--right">
					<router-link class="link footer__link-active" to="/Service">Условия сервиса</router-link>
					<div class="language footer__language">
						<img class="lang" src="../assets/lang.svg" alt="lang">
						<a href="#" class="link">
							<span class="language-item footer__language-item footer__link-active">Каз</span>
						</a>
						<a href="#" class="link">
							<span class="language-item footer__language-item footer__link-active">Рус</span>
						</a>
						<a href="#" class="link">
							<span class="language-item footer__language-item footer__link-active">Eng</span>
						</a>
					</div>
				</div>
			</div>
			<div class="social footer__social">
				<a href="#" class="link footer__link">
					<img class="social__item" src="../assets/VK.svg" alt="vk">
				</a>
				<a href="#" class="link footer__link">
					<img class="social__item" src="../assets/Instagram.svg" alt="instagram">
				</a>
				<a href="#" class="link footer__link">
					<img class="social__item" src="../assets/Telegram.svg" alt="telegram">
				</a>
				<a href="#" class="link footer__link ">
					<img class="social__item" src="../assets/Whatsapp.svg" alt="whatsapp">
				</a>
			</div>
		</div>
		
	</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer{
		background: #fff;
		border-radius: 30px 30px 0 0;
		&__link:not(:first-child){
			margin-left: 18px;
		}

		&__wrapper{
			display: flex;
			justify-content: space-between;
			padding: 30px 27px 36px 29px;
		}

		&__links{
			display: flex;
			line-height: 20.72px;
			font-size: 17px;
		}

		&__link--nav:not(:first-child){
			margin-top: 10px;
		}

		&__links--left{
			display: flex;
			flex-direction: column;
			margin-right: 174px;
		}

		&__links--right{
			margin-right: auto;
		}

		&__language{
			margin-top: 35px;
		}
		&__link-active:hover{
			transition: 0.4s;
			color: #FFA542;
	}
	}
	.link {
		text-decoration: none;
		color: #000;
	}

	.social{
		display: flex;
		align-items: stretch;
		flex-wrap: wrap;
		
	&__item{
		height: 31px;
		width: 31px;
		}
	}

	.language{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 500;
	}
</style>