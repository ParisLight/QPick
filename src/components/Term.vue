<template>
	<div class="term">
		<div class="title term__title">{{ term.title }}</div>
		<div class="text term__text">{{ term.text }}</div>
	</div>
</template>

<script>
export default {
	props: {
		term: {
			type: Object,
		},
	},
	data(){
		return{

		}
	}
}
</script>

<style lang="scss">
.term{
	padding: 15px 32px 25px 30px;
	background: #fff;
	border-radius: 30px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
	margin-bottom: 33px;
	&__title{
		margin-bottom: 15px;
		}
	}
.title {
	font-size: 17px;
	font-weight: 600;
	line-height: 20.72px;
	margin-bottom: 15px;
	}
.text {
	font-weight: 400;
	font-size: 17px;
	line-height: 20.72px;
	}
</style>