<template>
	<div class="container">
		<Header />
		<div class="content">
			<div class="favorites">
				<h3 class="title favorites__title">Избранное</h3>
			</div>
			
		</div>
		<Footer />
	</div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

</script>

<style lang="scss" scoped>

.favorites{
	&__title{
		margin-top: 30px;
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