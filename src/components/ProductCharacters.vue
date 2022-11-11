<template>
	<div class="characters">
		<h3 class="title">Описание и характеристики</h3>
		<div class="description">
			<span class="character" v-for="character in props.arrayCharacters" :key="character"></span>
		</div>
	</div>
</template>

<script setup>

const props = defineProps({
	arrayCharacters: {
		type: Array,
	}
})

</script>

<style>

</style>