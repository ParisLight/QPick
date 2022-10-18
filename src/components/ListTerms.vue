<template>
	<div class="list-terms">
		<Term v-for="term in listTerms" :term="term" :key="term.id"/>
	</div>
</template>

<script>
import Term from './Term.vue';
export default {
    props: {
        listTerms: {
            type: Array,
        }
    },
    components: { Term }
}
</script>

<style lang="scss">
    .list-terms{
        margin-top: 61px;
        margin-bottom: 90px;
    }
</style>