<template>
    <div>
        <input
			type="text" 
			placeholder="Nome" 
			@input="updateName">
        <input 
			type="text" 
			placeholder="Sobrenome"
			@input="updateSurname">
    </div>
</template>

<script>
export default {
	methods: {
		updateName: function(e){
			this.$store.commit('changeClientData', {
				field: 'name',
				newValue: e.target.value
			})
		},
		updateSurname: function(e){
			this.$store.commit('changeClientData', {
				field: 'secondName',
				newValue: e.target.value
			})
		}
	}

}
</script>

<style>

</style>