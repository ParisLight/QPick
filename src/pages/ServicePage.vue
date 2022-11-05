<template>
		<div class="container service__container">
			<Header />
			<div class="content">
				<ListTerms :listTerms="arrayTerms.terms" class="terms" />	
			</div>
			<Footer />
		</div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ListTerms from '@/components/ListTerms.vue';
import { termsStore } from '@/stores/termsStore.js';


const arrayTerms = termsStore();

</script>

<style lang="scss">
html {
	height: 100%;
}

body {
	height: 100%;
}

</style>