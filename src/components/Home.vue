<template lang="pug">
q-page(padding)
	.container
		.row.justify-between.items-center
			.zag Тренды
			div
				myChip
				q-btn(flat round icon="mdi-calendar" @click="toggle")
		Trends1
		.row.justify-between.items-center.q-mt-lg
			.zag Категории
			div
				myChip(label="Текущий месяц")
				q-btn(flat round icon="mdi-calendar" @click="toggle")
		Events

		.row.justify-between.items-center.q-mt-lg
			.zag Дополнительно
			div
				myChip(label="Прошлый месяц")
				q-btn(flat round icon="mdi-calendar" @click="toggle")
		Addition
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import myChip from '@/components/myChip.vue'
import Trends1 from '@/components/Trends1.vue'
import Events from '@/components/Events.vue'
import Addition from '@/components/Addition.vue'

const props = defineProps({
	foo: {
		type: String,
		default: 'test',
	},
})
const mystore = useStore()
const toggle = () => {
	mystore.closeMenu()
	mystore.toggleRightDrawer()
}
</script>

<style scoped lang="scss"></style>
