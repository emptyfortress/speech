<template lang="pug">
.grid
	div
		.label Ключевые слова
		q-select(
			dense
			v-model="mystore.keys"
			use-input
			use-chips
			multiple
			clearable
			input-debounce="0"
			new-value-mode="add-unique"
			:options="filterOptions"
			@filter="filterFn"
			@clear="clearKeys"
			bg-color="white").keys
			template(v-slot:no-option)
				q-item.nores
					q-item-section Добавить в словарь -
					q-item-section(side)
						span.enter enter
	div
		.label Тип искомых слов
		q-select(v-model="typmodel"  :options="typ" filled dense bg-color="white")

	div
		.label Положение слова в записи
		q-select(v-model="placemodel"  :options="place" filled dense bg-color="white")
	div
		.label Канал
		q-select(v-model="channelmodel"  :options="channel" filled dense bg-color="white")
p keys: {{ mystore.keys }}
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

const stringOptions = words.map((item) => item.key)
const filterOptions = ref(stringOptions)

const mystore = useStore()
const clearKeys = () => {
	mystore.setKeys([])
	mystore.clearSelected()
}

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
