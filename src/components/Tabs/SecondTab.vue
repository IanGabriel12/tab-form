<template>
	<div>
		<input type="text" placeholder="Rua" @input="updateStreet">
		<input type="number" placeholder="Número" @input="updateNumber">
	</div>

</template>

<script>
export default {
	methods: {
		updateStreet: function(e){
			this.$store.commit('changeClientData', {
				field: 'street',
				newValue: e.target.value
			})
		},
		updateNumber: function(e){
			this.$store.commit('changeClientData', {
				field: 'number',
				newValue: e.target.value
			})
		}
	}
}
</script>

<style>

</style>