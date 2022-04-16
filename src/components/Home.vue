<template lang="pug">
q-page(padding)
	.container
		.row.justify-between
			.zag Тренды
			div
				q-chip(label="Прошлая неделя" outline color="grey").cursor-pointer
				q-btn(flat round icon="mdi-calendar" @click="toggle")
		.grid
			div
			div
			div
			div
			div
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'

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
.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	div {
		width: 100%;
		height: 100px;
		background: white;
	}
}
</style>
