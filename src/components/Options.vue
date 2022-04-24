<template lang="pug">
.grid
	div
		.label Ключевые слова
		q-select(dense
			v-model="mystore.keys"
			use-input
			use-chips
			multiple
			clearable
			input-debounce="0"
			:options="options"
			@filter="filterFn"
			@clear="clear"
			bg-color="white").keys
			template(v-slot:no-option)
				q-item.text-grey
					q-item-section No results
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

<script setup>
import { ref, reactive } from 'vue'
import { words } from '@/stores/list'
import { useStore } from '@/stores/store'

const typ = ['Рекомендованные', 'Запрещенные']
const place = ['Весь файл', 'Первые', 'Последние']
const channel = ['Все', 'Оператор', 'Клиент']
const typmodel = ref('Рекомендованные')
const placemodel = ref('Весь файл')
const channelmodel = ref('Все')

const mystore = useStore()
const stringOptions = words.map((item) => item.key)
const options = ref(stringOptions)

const filterFn = (val, update, abort) => {
	update(() => {
		if (val === '') {
			options.value = stringOptions
		} else {
			const needle = val.toLowerCase()
			options.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1)
		}
	})
}
const clear = () => {
	mystore.clearSelected()
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
</style>
