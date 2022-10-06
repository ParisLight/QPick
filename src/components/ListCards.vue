<template>
	<section class="list">
		<div 
			class="list__wrapper" 
		>
			<Card v-for="card in cardList" 
				:key="card.id"
				:card="card"
			/>
		</div>
	</section>
</template>

<script>
import Card from './Card.vue';
export default {
    props: {
			cardList: {
        type: Array,
      },
			title: {
				type: String,
			}
    },
    data() {
      return {
				
			};
    },
    components: { Card }
}
</script>

<style lang="scss">
	.list__wrapper{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
	}
</style>