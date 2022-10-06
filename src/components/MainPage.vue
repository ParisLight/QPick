<template>
	<div class="container">
		<Header />
		<Banner />
		<ListCards
			:cardList="cardList"
		/>
		<Footer />
	</div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Banner from './Banner.vue';
import Card from './Card.vue';
import ListCards from './ListCards.vue';

export default {
	
  components: { Header, Footer, Banner, Card, ListCards },

		data(){
			return {
				cardList: [
					{
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 2327,
						grade: '4.7',
						category: 'Наушники'
					},
					{
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 2327,
						grade: '4.7',
						category: 'Наушники'

					},
					{
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 2327,
						grade: '4.7',
						category: 'Наушники'

					},
					{
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 2327,
						grade: '4.7',
						category: 'Наушники'

					},
					{
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 2327,
						grade: '4.7',
						category: 'Наушники'

					},
					{
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 2327,
						grade: '4.7',
						category: 'Наушники'

					},
				]
			}
		}
}

</script>

<style lang="scss">
	.container{
		max-width: 1185px;
		margin: 0 auto;
		padding: 0 25px;
	}
</style>