<template>
	<section class="list">
		<h3 class="title"><slot></slot></h3>
		<div class="list__wrapper" >
		<transition-group name="list">
			<Card v-for="item in props.itemsList" :key="item.id" :item="item" class="list-item"/>
		</transition-group>
		
		</div>
	</section>
</template>

<script setup>
import Card from './Card.vue';

const props = defineProps({
	itemsList: {
		type: Array,
	},
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



.list-enter-active,
.list-leave-active {
	transition: all 0.5s;
}

.list-enter,
.list-leave-to

/* .list-leave-active до версии 2.1.8 */
	{
	opacity: 0;
	transform: translateY(30px);
}
	

@media (max-width: 900px) {
	.list{
		&__wrapper{
			grid-template-columns: repeat(2, 1fr);
		}
	}
}
</style>