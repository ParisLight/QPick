<template>
	<div class="container">
		<Header />
		<div class="content">
			<div class="favorites">
				<h3 class="title favorites__title">Избранное</h3>
				<ListCards v-if="favStore.covers.length" 
					:itemsList="favStore.covers"
					>
					Чехлы
				</ListCards>
				<ListCards v-if="favStore.headphone.length" 
					:itemsList="favStore.headphone"
					>Наушники</ListCards>
				<ListCards v-if="favStore.wireless.length" 
					:itemsList="favStore.wireless"
				>Беспроводные наушники</ListCards>
			</div>
		</div>
		<Footer class="favorites__footer"/>
	</div>
</template>

<script setup>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ListCards from '@/components/ListCards.vue';
import { FavoritesStore } from '@/stores/favoritesStore.js';
import { useStore } from '@/stores/productsStore.js';
const favStore = FavoritesStore();
const products = useStore();


</script>

<style lang="scss" scoped>

.favorites{
	&__title{
		margin-top: 30px;
	}

	&__footer{
		margin-top: 41px;
	}
}
.title {
	font-weight: 600;
	color: #1C1C27;
	font-size: 20px;
	line-height: 24.38px;
	margin-bottom: 20px;
}
</style>