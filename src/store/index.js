import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		clientData: {
			name: '',
			secondName: '',
			street: '',
			number: 0,
			cpf: '',
			cep: ''
		}
	},
	mutations: {
		changeClientData: function(state, options){
			const clientDataCopy = state.clientData
			const { field, newValue } = options
			
			clientDataCopy[field] = newValue

			state.clientData = clientDataCopy
		},
	},
	actions: {
	},
	modules: {
	}
})
