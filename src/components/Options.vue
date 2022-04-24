<template lang="pug">
.grid
	div
		.label Ключевые слова
		q-select(filled v-model="model" use-input input-debounce="0" label="Simple filter" :options="options" @filter="filterFn")
			template(v-slot:no-option)
				q-item
					q-item-section.text-grey No results

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
import { ref, reactive } from 'vue'
import { useStore } from '@/stores/store'
import { words } from '@/stores/list'

const typ = ['Рекомендованные', 'Запрещенные']
const place = ['Весь файл', 'Первые', 'Последние']
const channel = ['Все', 'Оператор', 'Клиент']
const typmodel = ref('Рекомендованные')
const placemodel = ref('Весь файл')
const channelmodel = ref('Все')

// const stringOptions = words.map((item) => item.key)
const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
const options = ref(stringOptions)
// const filterOptions = ref(stringOptions)

const mystore = useStore()

const clearKeys = () => {
	mystore.setKeys([])
	mystore.clearSelected()
}

const model = ref(null)
const filterFn = (val: string, update: Function) => {
	if (val === '') {
		update(() => {
			options.value = stringOptions
		})
		return
	}
	update(() => {
		const needle = val.toLowerCase()
		options.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1)
	})
}

// const filterFn = (val: string, update: Function) => {
// 	update(() => {
// 		if (val === '') {
// 			filterOptions.value = stringOptions
// 		} else {
// 			const needle = val.toLowerCase()
// 			filterOptions.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1)
// 		}
// 	})
// }
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';

.grid {
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: grid;
	grid-template-columns: 1fr 210px 230px 130px;
	gap: 1rem;
}
.label {
	font-size: 0.8rem;
	font-weight: 600;
}
.nores {
	background: $blue-2;
}
.enter {
	padding: 0.2rem 1rem;
	background: $primary;
	color: white;
	border-radius: 4px;
}
</style>
