<template lang="pug">
q-expansion-item(v-model="stat").q-mt-md
	template(v-slot:header)
		q-item-section(avatar)
			q-avatar(icon="mdi-percent-circle-outline" flat)
		q-item-section
			.zag Статистика по ключевым словам
	q-card-section.q-px-md.q-pt-none
		.toolbar
			q-select(label="Сортировка" v-model="sort" :options="sortModel" dense)
			q-select(label="Часть речи" v-model="part" :options="partModel" dense)
			q-input(v-model="filter" dense clearable)
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")
			q-range(v-model="label" :min="20" :max="400" :step="4" label color="primary" label-always)
		.text-center
			component(:is="Wordchip" v-for="chip in mychips" :key="chip.key" :label="chip.key" :count="chip.value" :part="chip.part")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Wordchip from '@/components/common/Wordchip.vue'
import { chips } from '@/stores/chips'

const stat = ref(true)
const filter = ref('')
const sort = ref('Вес 9 -> 0')
const part = ref('Существительные')
const label = ref({ min: 50, max: 300 })

const sortModel = ['Вес 9 -> 0', 'Вес 0 -> 9', 'Алфавит А -> Я', 'Алфавит Я -> А']
const partModel = ['Существительные', 'Прилагательные', 'Глаголы', 'Наречия']

const mychips = computed(() => {
	switch (sort.value) {
		case 'Вес 0 -> 9':
			return chips.sort((a, b) => {
				return a.value - b.value
			})
		case 'Вес 9 -> 0':
			return chips.sort((a, b) => b.value - a.value)
		case 'Алфавит А -> Я':
			return chips.sort((a, b) => {
				let fa = a.key.toLowerCase()
				let fb = b.key.toLowerCase()
				if (fa < fb) {
					return -1
				}
				if (fa > fb) {
					return 1
				}
				return 0
			})
		case 'Алфавит Я -> А':
			return chips.sort((a, b) => {
				let fa = a.key.toLowerCase()
				let fb = b.key.toLowerCase()
				if (fa > fb) {
					return -1
				}
				if (fa < fb) {
					return 1
				}
				return 0
			})
		default:
			return chips
	}
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.toolbar {
	margin-bottom: 1.5rem;
	font-size: 0.9rem;
	display: grid;
	grid-template-columns: 1fr 1fr 2fr 3fr;
	align-items: baseline;
	gap: 2rem;
}
.q-range {
	transform: translateY(14px);
}
</style>
