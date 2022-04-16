<template lang="pug">
q-page(padding)
	.container
		.row.justify-between
			.zag Тренды
			div
				myChip
				q-btn(flat round icon="mdi-calendar" @click="toggle")
		Trends
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import myChip from '@/components/myChip.vue'
import Trends from '@/components/Trends.vue'

const props = defineProps({
	foo: {
		type: String,
		default: 'test',
	},
})
const mystore = useStore()
const toggle = () => {
	mystore.toggleMini()
	mystore.toggleRightDrawer()
}
</script>

<style scoped lang="scss">
// @import '@/assets/styles/main.scss';
//@import '@/assets/css/colors.scss';
</style>
