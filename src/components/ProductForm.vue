<template>
    <form @submit.prevent>
        <h2>Cadastro de parceiro</h2>
        <button type="button" v-for="(tab, index) in tabs" v-bind:key="index" @click="selectTab(index)">
            {{ tab }}
        </button>
        <div>
            <p>Campos</p>
            <component v-bind:is="currentTabComponent" />
            <button v-if="tabs[currentTab] === lastTab" type="submit" @click="submitData">
                Concluir
            </button>
            <button type="button" @click="goToNextTab" v-else >
                Próximo
            </button>
        </div>
    </form>
</template>

<script>
import FirstTab from './Tabs/FirstTab'
import SecondTab from './Tabs/SecondTab'
import ThirdTab from './Tabs/ThirdTab'

export default {
    data: function(){
        return {
            currentTab: 0,
            tabs: ['First', 'Second', 'Third']
        } 
	},
    computed: {
        lastTab: function(){
            return this.tabs[this.tabs.length - 1]
        },
        currentTabComponent: function(){
            return this.tabs[this.currentTab].toLowerCase() + '-tab'
		},
    },
    methods: {
        goToNextTab: function(){
            this.currentTab++
        },
        selectTab: function(tab){
            this.currentTab = tab
		},
		submitData: function(){
			console.log(this.$store.state.clientData)
		}
	},
    components: {
        FirstTab,
        SecondTab,
        ThirdTab
    }
}
</script>

<style>

</style>