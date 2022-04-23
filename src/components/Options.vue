<template lang="pug">
.grid
	q-select(filled v-model="model"  use-input use-chips multiple clearable input-debounce="0" new-value-mode="add-unique" @new-value="createValue" :options="filterOptions" @filter="filterFn" label="Ключевые слова")
	//- q-select(filled v-model="model" use-input use-chips multiple)
	q-select(v-model="typmodel"  :options="typ" label="Тип искомых слов" filled)
	q-select(v-model="placemodel"  :options="place" label="Положение слова в записи" filled)
	q-select(v-model="channelmodel"  :options="channel" label="Канал" filled)
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

function createValue(val, done) {
	// Calling done(var) when new-value-mode is not set or "add", or done(var, "add") adds "var" content to the model
	// and it resets the input textbox to empty string
	// ----
	// Calling done(var) when new-value-mode is "add-unique", or done(var, "add-unique") adds "var" content to the model
	// only if is not already set
	// and it resets the input textbox to empty string
	// ----
	// Calling done(var) when new-value-mode is "toggle", or done(var, "toggle") toggles the model with "var" content
	// (adds to model if not already in the model, removes from model if already has it)
	// and it resets the input textbox to empty string
	// ----
	// If "var" content is undefined/null, then it doesn't tampers with the model
	// and only resets the input textbox to empty string

	if (val.length > 0) {
		if (!stringOptions.includes(val)) {
			stringOptions.push(val)
		}
		done(val, 'add-unique')
	}
}

const filterFn = (val, update) => {
	update(() => {
		if (val === '') {
			filterOptions.value = stringOptions
		} else {
			const needle = val.toLowerCase()
			filterOptions.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1)
		}
	})
}

// const createValue = () => {
// 	console.log(1)

// const filterOptions = () => {
// 	console.log(2)
// }
// const filter = () => {
// 	console.log(3)
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';

.grid {
	display: grid;
	grid-template-columns: 1fr 210px 230px 130px;
	gap: 1rem;
}
</style>
