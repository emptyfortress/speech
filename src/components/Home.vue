<template lang="pug">
q-page(padding)
	.container
		.row.justify-between.items-center
			.zag Тренды
			component(:is="ChipCalendar1")
		component(:is="Trends1")
		component(:is="Events")

		.row.justify-between.items-center.q-mt-lg
			.zag Дополнительно
			component(:is="ChipCalendar1")
		component(:is="Addition")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Trends1 from '@/components/Trends1.vue'
import Events from '@/components/Events.vue'
import Addition from '@/components/Addition.vue'
import ChipCalendar1 from '@/components/ChipCalendar1.vue'

interface Category {
	id: number
	label: string
	selected: boolean
}

const categories = reactive([
	{ id: 0, label: 'Продажи', selected: true },
	{ id: 1, label: 'Сервис', selected: true },
	{ id: 2, label: 'Оплата', selected: true },
	{ id: 3, label: 'Жалобы', selected: false },
	{ id: 4, label: 'Неисправности', selected: false },
	{ id: 5, label: 'Услуги', selected: false },
	{ id: 6, label: 'Работа', selected: false },
	{ id: 7, label: 'Регионы', selected: false },
	{ id: 8, label: 'Грубость', selected: false },
	{ id: 9, label: 'Остальное', selected: false },
])

const update = (e: Category) => {
	e.selected = !e.selected
}
</script>

<style scoped lang="scss"></style>
