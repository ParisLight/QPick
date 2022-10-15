<template>
	<div class="container">
		<Header />
		<Banner />
		<ListCards
			:itemsList="coversList"
		>
			Чехлы
		</ListCards>
		<ListCards
			:itemsList="headphones"
		>
			Наушники
		</ListCards>
		<ListCards
			:itemsList="wireless"
		>
			Беспроводные наушники
		</ListCards>
		<Footer style="margin-top: 60px;" />
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
				headphones: [
					{
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 2321,
						grade: '4.7',
						category: 'Наушники',
						oldPrice: 3527,
					},
					{
						name: "Apple EarPods",
						img: 'Apple EarPods.png',
						price: 2322,
						grade: '4.7',
						category: 'Наушники',
						sale: 2000,
						percent: 20,
					},
					{
						name: "Apple EarPods",
						img: 'Apple EarPods2.png',
						price: 2323,
						grade: '4.7',
						category: 'Наушники'
					},
					{
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 2321,
						grade: '4.7',
						category: 'Наушники',
					},
					{
						name: "Apple EarPods",
						img: 'Apple EarPods.png',
						price: 2322,
						grade: '4.7',
						category: 'Наушники'
					},
					{
						name: "Apple EarPods",
						img: 'Apple EarPods2.png',
						price: 2323,
						grade: '4.7',
						category: 'Наушники'
					},
				],

				wireless: [
					{name: 'Apple AirPods', img: 'Airpods.png', price: 2323, grade: '4.7'},
					{name: 'GERLAX GH-04', img: 'Gerlax gh-04.png', price: 2323, grade: '4.7'},
					{name: 'BOROFONE BO4', img: 'borofone bo4.png', price: 2323, grade: '4.7'},
				],
				coversList: [
					{name: 'Стеклянные', img: 'glasses.png', },
					{name: 'Силиконовые', img: 'silicone.png'},
					{name: 'Кожаные', img: 'leather.png'},
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