<template>
	<section class="list">
		<h3 class="title"><slot></slot></h3>
		<div 
			class="list__wrapper" 
		>
		<Card v-for="item in props.itemsList" 
			:key="item.index"
			:item="item"
			:functions="props.functions"
		/>
		</div>
	</section>
</template>

<script setup>
import Card from './Card.vue';

const props = defineProps({
	itemsList: {
		type: Array,
	},

	functions: {
		type: Function,
	}
})

</script>

<style scoped lang="scss">
.title{
		font-weight: 600;
		color: #838383;
		font-size: 20px;
		line-height: 24.38px;
		margin-bottom: 20px;
	}
	.list{
		margin-top: 30px;
		&__wrapper{
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 30px;
		}
	}
	

@media (max-width: 900px) {
	.list{
		&__wrapper{
			grid-template-columns: repeat(2, 1fr);
		}
	}
}
</style>