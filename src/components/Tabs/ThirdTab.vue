<template>
	<div>
		<input type="text" placeholder="CPF" @input="updateCPF">
		<input type="text" placeholder="CEP" @input="updateCEP">
	</div>
</template>

<script>
export default {
    methods: {
		updateCPF: function(e){
			this.$store.commit('changeClientData', {
				field: 'cpf',
				newValue: e.target.value
			})
		},
		updateCEP: function(e){
			this.$store.commit('changeClientData', {
				field: 'cep',
				newValue: e.target.value
			})
		}
	}
}
</script>

<style>

</style>