<template>
	<div>
		<h1>{{ label }} - {{ ip }}</h1>
		<button type="button" v-on:click="updateTitle">Update title</button>
		<button type="button" v-on:click="getIp">Get IP</button>
	</div>
</template>

<script>
export default {
	layout: 'index',
	data() {
		return {
			label: 'Comics',
			titleSuffix: ' | Comics',
			ip: 'Waiting...'
		};
	},
	head() {
		return {
			title: 'Dagelijkse dosis comics'
		}
	},
	// async asyncData({ $axios }) {
	// 	const ip = await $axios.$get('https://icanhazip.com')
	// 	return { ip }
	// },
	methods: {
		updateTitle: function() {
			document.title = 'Boom!' + this.titleSuffix;

		},
		async getIp() {
			const ip = await this.$axios.$get('https://icanhazip.com');
			this.ip = ip;
		}
	}
}
</script>
