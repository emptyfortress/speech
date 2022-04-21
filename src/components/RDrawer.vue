<template lang="pug">

q-drawer(v-model="show" side="right" :width="300" ).rdrawer
	template(v-if="$route.path === '/'")
		q-btn(flat round icon="mdi-close" @click="toggle")
		q-btn(flat round icon="mdi-check" color="accent")
		q-btn(flat round icon="mdi-check-circle" color="accent" @click="toggle" )
		q-date(v-model="model" range flat color="accent").date
	template(v-else)
		KeywordList
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import KeywordList from '@/components/KeywordList.vue'

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
})
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
</style>
