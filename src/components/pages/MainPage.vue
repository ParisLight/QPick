<template>
	<div class="container">
		<div class="content">
			<Header />
			<Banner />
			<ListCards :itemsList="coversList">
				Чехлы
			</ListCards>
			<ListCards :itemsList="headphones">
				Наушники
			</ListCards>
			<ListCards :itemsList="wireless">
				Беспроводные наушники
			</ListCards>
			<Footer style="margin-top: 60px;" />
		</div>
		
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Banner from '@/components/Banner.vue';
import Card from '@/components/Card.vue';
import ListCards from '@/components/ListCards.vue';

export default {
	
  components: { Header, Footer, Banner, Card, ListCards },

	data(){
			return {
				headphones: [
					{
						id: 1,
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 2321,
						grade: '4.7',
						category: 'Наушники',
						newPrice: 3527,
					},
					{
						id: 2,
						name: "Apple EarPods",
						img: 'Apple EarPods.png',
						price: 2322,
						grade: '4.7',
						category: 'Наушники',
						newPrice: 3527,
						sale: 20,
					},
					{
						id: 3,
						name: "Apple EarPods",
						img: 'Apple EarPods2.png',
						price: 2323,
						grade: '4.7',
						category: 'Наушники'
					},
					{
						id: 4,
						name: "Apple BYZ S8521",
						img: 'Apple BYZ S8521.png',
						price: 3527,
						newPrice: 2927,
						sale: 20,
						grade: '4.7',
						category: 'Наушники',
					},
					{
						id: 5,
						name: "Apple EarPods",
						img: 'Apple EarPods.png',
						price: 2322,
						grade: '4.7',
						category: 'Наушники'
					},
					{
						id: 6,
						name: "Apple EarPods",
						img: 'Apple EarPods2.png',
						price: 2323,
						grade: '4.7',
						category: 'Наушники'
					},
				],

				wireless: [
					{ id: 7, name: 'Apple AirPods', img: 'Airpods.png', price: 2323, grade: '4.7'},
					{ id: 8, name: 'GERLAX GH-04', img: 'Gerlax gh-04.png', price: 2323, grade: '4.7'},
					{ id: 9, name: 'BOROFONE BO4', img: 'borofone bo4.png', price: 2323, grade: '4.7'},
				],
				coversList: [
					{ id: 10, name: 'Стеклянные', img: 'glasses.png', },
					{ id: 11, name: 'Силиконовые', img: 'silicone.png'},
					{ id: 12, name: 'Кожаные', img: 'leather.png'},
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

	.content{
			display: flex;
			flex-direction: column;
			min-height: 100%;
	}
</style>