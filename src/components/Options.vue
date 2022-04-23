<template lang="pug">
.grid
	div
		.label Ключевые слова
		q-select(filled dense v-model="model" use-input use-chips multiple clearable input-debounce="0" new-value-mode="add-unique" :options="filterOptions" @filter="filterFn" bg-color="white")
	div
		.label Тип искомых слов
		q-select(v-model="typmodel"  :options="typ" filled dense bg-color="white")

	div
		.label Положение слова в записи
		q-select(v-model="placemodel"  :options="place" filled dense bg-color="white")
	div
		.label Канал
		q-select(v-model="channelmodel"  :options="channel" filled dense bg-color="white")
</template>

<script setup lang="ts">
import { ref } from 'vue'
const typ = ['Рекомендованные', 'Запрещенные']
const place = ['Весь файл', 'Первые', 'Последние']
const channel = ['Все', 'Оператор', 'Клиент']
const typmodel = ref('Рекомендованные')
const placemodel = ref('Весь файл')
const channelmodel = ref('Все')

const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
const filterOptions = ref(stringOptions)

const model = ref(null)

const filterFn = (val: string, update: Function) => {
	update(() => {
		if (val === '') {
			filterOptions.value = stringOptions
		} else {
			const needle = val.toLowerCase()
			filterOptions.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1)
		}
	})
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';

.grid {
	display: grid;
	grid-template-columns: 1fr 210px 230px 130px;
	gap: 1rem;
}
.label {
	font-size: 0.8rem;
	font-weight: 600;
}
</style>
