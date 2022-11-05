<template>
	<div class="map">
		<div class="map__content">
			<div class="map-leftside">
				<div class="geo map__geo">
					<div class="position map__position">
						<h3 class="title map__title">Наш офис</h3>
						<iframe
							class="frame"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7525158399653!2d76.82204483289124!3d43.235648212410084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369df8337f677%3A0x1573d43498f5594e!2z0JDQutGB0LDQuS0z0LAsINCQ0LvQvNCw0YLRiywg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1666112116336!5m2!1sru!2sru"
							style="border:0;" allowfullscreen="" loading="lazy"
							referrerpolicy="no-referrer-when-downgrade">
						</iframe>
					</div>
					<div class="map__description">
						<img class="map__description-icon" src="../assets/ContactsPage/geo.svg" alt="geo">
						<div class="map__description-text">
							<span class="adress map__description-adress">Аксай-3а, 62ф, Алматы, Казахстан</span>
							<span class="etazh map__description-etazh">3 этаж 35 кабинет</span>
						</div>
					</div>
				</div>
				<div class="map__phone">
					<img src="../assets/ContactsPage/phone.svg" alt="phone">
					<span class="map__number" >+7 777 777 77 77</span>
				</div>
			</div>
			<div class="map-rightside">
				<div class="map__contacts">
					<a href="#" class="link map__link ">
						<img class="map__img" src="../assets/ContactsPage/whatsapp.png" alt="whatsapp">
					</a>
					<a href="#" class="link map__link">
						<img class="map__img" src="../assets/ContactsPage/vk.png" alt="vk">
					</a>
					<a href="#" class="link map__link">
						<img class="map__img" src="../assets/ContactsPage/instagram.png" alt="instagram">
					</a>
					<a href="#" class="link map__link">
						<img class="map__img" src="../assets/ContactsPage/telegram.png" alt="telegram">					
					</a>
				</div>
			</div>			
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="scss">
.map{
	&__content{
		display: flex;
		justify-content: space-between;
	}

	&-leftside{
		margin: 0 auto;
	}

	&__title{
		padding-top: 15px;
		margin-bottom: 20px;
	}
		
	&__geo{
		padding: 0px 20px 0 18px;
		width: 760px;
		background: #f9f9f9;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		border-radius: 30px;
		margin-bottom: 44px;
	}
	

	&__phone{
		max-width: 270px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__number{
		font-weight: 600;
		font-size: 25px;
		line-height: 30px;
	}

	&__contacts{
		display: flex;
		flex-direction: column;
	}

	&__link{
		&:not(:last-child){
			margin-bottom: 14px;
		}
	}

	&__img{
		background: #fff;
		border-radius: 30px;
		padding: 30px;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		widows: 100%;
		height: 100%;
		max-width: 97px;
		max-height: 97px;
		object-fit: contain;
	}

	&__description{
		margin-top: 13px;
		max-width: 296px;
		display: flex;
		justify-content: space-between;
		padding-bottom: 27px;
		&-text{
			display: flex;
			flex-direction: column;
		}
	}
}


.adress{
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
}

.etazh{
	font-weight: 500;
	font-size: 13px;
	line-height: 16px;
	color: #838383;
}
.frame{
	max-width: 722px;
	max-height: 424px;
	width: 100%;
	border-radius: 10px;
	height: 350px;
}
</style>