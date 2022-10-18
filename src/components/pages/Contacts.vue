<template>
	<div class="container">
		<div class="content">
			<Header />
			<Map />
			<Footer />
		</div>
	</div>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import Map from '../Map.vue';
export default {
    components: { Header, Footer, Map }
}
</script>

<style>

</style>