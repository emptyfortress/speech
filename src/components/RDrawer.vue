<template lang="pug">
q-drawer(v-model="mystore.rightDrawer" side="right" :width="300" ).rdrawer
	template(v-if="mystore.drawerContent === 1")
		q-btn(flat round icon="mdi-close" @click="toggle")
		q-btn(flat round icon="mdi-check" color="accent")
		q-btn(flat round icon="mdi-check-circle" color="accent" @click="toggle" )
		q-date(v-model="model" range flat color="accent").date
	template(v-if="mystore.drawerContent === 2")
		KeywordList
	p fuck
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import KeywordList from '@/components/KeywordList.vue'

const model = ref(null)
const mystore = useStore()
const toggle = () => {
	mystore.closeMenu()
	mystore.toggleRightDrawer()
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.date {
	margin-top: 0;
}
.rdrawer {
	padding: 1rem;
	background: #ccc;
}
</style>
