<template>
	<div>
		<h1>{{ label }}</h1>
		<button type="button" v-on:click="updateTitle">Update title</button>
	</div>
</template>

<script>
export default {
	layout: 'index',
	data() {
		return {
			label: 'Comics',
			titleSuffix: ' | Comics'
		};
	},
	head() {
		return {
			title: 'Dagelijkse dosis comics'
		}
	},
	methods: {
		updateTitle: function() {
			document.title = 'Boom!' + this.titleSuffix;

		}
	}
}
</script>
