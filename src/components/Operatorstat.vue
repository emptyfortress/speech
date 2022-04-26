<template lang="pug">
q-expansion-item(v-model="oper").q-mt-md
	template(v-slot:header)
		q-item-section(avatar)
			q-avatar(icon="mdi-headset" flat)

		q-item-section
			.zag Статистика по операторам
	q-card-section.q-px-md.q-pt-md
		.grid
			q-table(:rows="rows"
				:columns='columns'
				row-key="name"
				selection="single"
				v-model:selected="selected"
				:selected-rows-label="getSelectedString"
				@row-click="(evt, row, index) => select(row)").table
				template(v-slot:body-selection)
			q-card
				q-card-section(v-if="!selected.length") test
				q-card-section(v-else) {{ selected[0].name}}
				q-card-section(v-if="!selected.length") here graph
				q-card-section(v-else)
					component(:is="VueApexCharts" type="donut" :options="options" :series="getSeries")


</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { operators } from '@/stores/operators'
import VueApexCharts from 'vue3-apexcharts'

interface MyColumns {
	name: string
	label: string
	field: string | ((row: any) => any)
	required?: boolean
	align?: 'left' | 'right' | 'center'
	sortable?: boolean
	sort?: (a: any, b: any, rowA: any, rowB: any) => number
	sortOrder?: 'ad' | 'da'
	format?: (val: any, row: any) => any
	style?: string | ((row: any) => string)
	classes?: string | ((row: any) => string)
	headerStyle?: string
	headerClasses?: string
}

interface Row {
	name: string
	good: number
	notgood: number
	bad: number
}

const columns: MyColumns[] = [
	{
		name: 'name',
		required: true,
		label: 'Оператор',
		align: 'left',
		field: 'name',
		sortable: true,
	},
	{
		name: 'good',
		required: false,
		label: 'Соответствует сценарию',
		align: 'right',
		field: 'good',
		sortable: true,
	},
	{
		name: 'notgood',
		required: false,
		label: 'Частично соответствует',
		align: 'right',
		field: 'notgood',
		sortable: true,
	},
	{
		name: 'bad',
		required: false,
		label: 'Не соответствует',
		align: 'right',
		field: 'bad',
		sortable: true,
	},
]

const rows = operators

const oper = ref(true)
const selected: Ref<Row[]> = ref([])
const select = (e: Row) => {
	if (selected.value.length === 0) {
		selected.value.push(e)
	} else if (selected.value[0].name === e.name) {
		selected.value = []
	} else {
		selected.value = []
		selected.value.push(e)
	}
}
const getSelectedString = (e: number) => {
	return `Выбран ${e} оператор`
}

const getSeries = computed(() => {
	let item = selected.value[0]
	let data = []
	data.push(item.good)
	data.push(item.notgood)
	data.push(item.bad)
	return data
})
const options = {
	chart: {
		type: 'donut',
	},
	labels: ['Соответствует', 'Частично', 'Не соответствует'],
	legend: {
		show: true,
		position: 'bottom',
	},
	dataLabels: {
		enabled: true,
		formatter: function (val: number) {
			return Math.round(val) + '%'
		},
	},
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	.q-card {
		min-height: 100px;
	}
}
</style>
