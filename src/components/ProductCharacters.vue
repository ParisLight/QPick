<template>
	<div class="characters">
		<div class="characters-wrapper">
			<div class="title-wrapper characters__title-wrapper">
				<h3 class="title characters__title">Описание и характеристики</h3>
			</div>
			
			<div class="description">
				<span class="character" v-for="character in props.arrayCharacters" :key="character">
					{{ character }}
				</span><br>
			</div>
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

<style scoped lang="scss">
.characters{
	max-height: 547px;
	
	
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	&-wrapper{
		max-width: 824px;
		background: #F9F9F9;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
	}

	&__title-wrapper{
		margin-bottom: 20px;
	}
}

.title{
	background: #fff;
	border-radius: 15px;
	color: #1C1C27;
	padding-top: 20px;
	padding-bottom: 21px;
	padding-left: 23px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
.description{
	padding-left: 23px;
	
	
}

.character{
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #1C1C27;
	display: block;
	margin-bottom: 10px;
}
</style>