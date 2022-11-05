<template>
	<div class="list-terms">
		<Term v-for="term in props.listTerms" :term="term" :key="term.id"/>
	</div>
</template>

<script setup>
import Term from './Term.vue';

const props = defineProps({
    listTerms: {
        type: Array,
    }
})
</script>

<style lang="scss">
    .list-terms{
        margin-top: 61px;
        margin-bottom: 90px;
    }
</style>