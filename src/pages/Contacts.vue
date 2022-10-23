<template>
	<div class="container">
			<Header />
			<div class="content contacts__content">
				<Map />
			</div>
			<Footer />
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Map from '@/components/Map.vue';
export default {
    components: { Header, Footer, Map }
}
</script>

<style lang="scss">
	.contacts{
		&__content{
			margin-top: 27px;
		}
	}
</style>