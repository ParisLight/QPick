<template>
	<div class="map">
		
		<div class="map__content">
			<div class="geo map__geo">
				<!-- <h3 class="title">Наш офис</h3> -->
				<div class="position map__position">
					<iframe
						class=""
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7525158399653!2d76.82204483289124!3d43.235648212410084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369df8337f677%3A0x1573d43498f5594e!2z0JDQutGB0LDQuS0z0LAsINCQ0LvQvNCw0YLRiywg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1666112116336!5m2!1sru!2sru"
						width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
						referrerpolicy="no-referrer-when-downgrade">
					</iframe>
				</div>
			</div>
			<div class="map__contacts">
				<img class="map__img" src="../assets/ContactsPage/whatsapp.png" alt="whatsapp">
				<img class="map__img" src="../assets/ContactsPage/vk.png" alt="vk">
				<img class="map__img" src="../assets/ContactsPage/instagram.png" alt="instagram">
				<img class="map__img" src="../assets/ContactsPage/telegram.png" alt="telegram">
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.map{
	&__content{
		display: flex;
		justify-content: space-between;
	}
		
	&__geo{
		padding: 56px 20px 74px 17.7px;
		margin: 0 auto;
		background: #f9f9f9;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		border-radius: 30px;

	}

	&__position{
		text-align: center;
	}

	&__contacts{
		display: flex;
		flex-direction: column;
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
		&:not(:last-child){
			margin-bottom: 14px;
		}
	}
}
</style>