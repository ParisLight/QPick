<template>
	<div class="container">
		<Header />
		<div class="content">
			<Banner />
			<ListCards :itemsList="products.coversList">
				Чехлы
			</ListCards>
			<ListCards :itemsList="products.headphones">
				Наушники
			</ListCards>
			<ListCards :itemsList="products.wireless">
				Беспроводные наушники
			</ListCards>
		</div>
		<Footer style="margin-top: 60px;" />
	</div>
</template>

<script setup>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Banner from '@/components/Banner.vue';
import Card from '@/components/Card.vue';
import ListCards from '@/components/ListCards.vue';
import { useStore } from '@/stores/productsStore.js';

const products = useStore();

</script>

<style lang="scss">

</style>