<template>
	<section class="list">
		<h3 class="title"><slot></slot></h3>
		<div 
			class="list__wrapper" 
		>
		<Card v-for="item in itemsList" 
			:key="item.id"
			:item="item"
		/>
		</div>
	</section>
</template>

<script>
import Card from './Card.vue';
export default {
    props: {
		itemsList: {
        	type: Array,
      	},
		
    },
    data() {
      return {
				
		};
    },
    components: { Card }
}
</script>

<style lang="scss">
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
	
</style>