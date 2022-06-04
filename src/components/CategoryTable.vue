<template lang="pug">
q-table(:rows="rows"
	:columns='columns'
	row-key="id"
	selection="single"
	v-model:selected="selected"
	binary-state-sort
	hide-bottom
	).table.thinhd

	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(auto-width)
			q-th(v-for="col in props.cols" :key="col.name" :props="props") {{ col.label }}
			q-th(auto-width)

	template(v-slot:body="props")
		q-tr(:props="props" @click="select(props.row)" )
			q-td(auto-width)
				q-btn(size="md" flat round dense @click.stop="props.expand = !props.expand" :icon="props.expand ? 'mdi-chevron-down' : 'mdi-chevron-right'")
			q-td(key="name" :props="props")
				.legend(:class="props.row.classname")
				span {{ props.row.name }}
			q-td(key="call" :props="props").big
				|{{ props.row.call }}
				span.up &uarr;
			q-td(key="ant" :props="props").big
				|{{ props.row.ant }} мин
				span.down &darr;
			q-td(key="loud" :props="props").big
				|{{ props.row.loud }}%
				span.up &uarr;
			q-td(key="interrupt" :props="props").big
				|{{ props.row.interrupt }}%
				span.up &uarr;
			q-td(@click.stop="showDialog1").graph
				VueApexCharts(type="line" height="35" width="110" :options="props.row.options1" :series="props.row.series1" )
			q-td(@click.stop="showDialog2").graph
					VueApexCharts(type="donut" height="35" width="35" :options="props.row.options2" :series="props.row.series2" )

			q-td(auto-width)
				q-btn(size="md" flat round dense icon="mdi-chevron-right" @click.stop="bigTable = true")

		q-tr(v-show="props.expand" v-for="(row, index) in addition" :key="row.id" @click="select(row)" :class="{'selected' : row.selected}")
			q-td(auto-width)
			q-td {{ row.name }}
			q-td {{ row.call }}
			q-td {{ row.ant }}
			q-td {{ row.loud }}
			q-td {{ row.interrupt }}
			q-td
			q-td
			q-td(auto-width)

q-dialog(v-model="bigTable")
	q-card(style="width: 900px; max-width: 80vw;")
		q-btn(round color="negative" icon="mdi-close" @click="bigTable = false").close
		q-card-section
			q-table(:rows="addition"
				:columns="columns1"
				row-key="id"
				binary-state-sort
				flat
				)
				template(v-slot:top)
					.text-h6 Название категории
					q-space
					q-input(dense debounce="300" color="primary" clearable v-model="fil")
						template(v-slot:prepend)
							q-icon(name="mdi-magnify")


q-dialog(v-model="dialog1")
	q-card(style="width: 900px; max-width: 80vw;")
		q-btn(round color="negative" icon="mdi-close" @click="dialog1 = false").close
		q-card-section
			component(:is="VueApexCharts" type="area" :options="chartTableAreaBig" :series="seriesTableBig1")
q-dialog(v-model="dialog2")
	q-card(style="width: 600px; max-width: 80vw;")
		q-btn(round color="negative" icon="mdi-close" @click="dialog2 = false").close
		q-card-section
			VueApexCharts(type="donut" :options="chartTableDonutBig" :series="seriesTable4")
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { chartOptions1 as chartTableAreaBig } from '@/stores/charts1'
import {
	chartTable1,
	seriesTable1,
	seriesTable2,
	seriesTable3,
	chartTable4,
	seriesTable4,
} from '@/stores/charts1'
import { useSelect } from '@/stores/select'

const emit = defineEmits(['select'])

const fil = ref('')
const dialog1 = ref(false)
const dialog2 = ref(false)
const showDialog1 = () => {
	dialog1.value = true
}
const showDialog2 = () => {
	dialog2.value = true
}

const sel = useSelect()
const select = (e: RowCategory) => {
	if (selected.value.length === 0) {
		selected.value.push(e)
		sel.setSelection(true)
	} else if (selected.value[0].id === e.id) {
		selected.value = []
		sel.setSelection(false)
	} else {
		selected.value = []
		selected.value.push(e)
		sel.setSelection(true)
	}
}

const addition: RowCategory[] = [
	{
		id: 4,
		name: 'Подкатегория 1',
		call: '4.32',
		ant: '4:15',
		loud: '1.89',
		interrupt: '1.89',
		dynamics: '',
		volume: '',
		selected: false,
	},
	{
		id: 5,
		name: 'Подкатегория 2',
		call: '4.32',
		ant: '4:15',
		loud: '1.89',
		interrupt: '1.89',
		dynamics: '',
		volume: '',
		selected: false,
	},
	{
		id: 6,
		name: 'Подкатегория 3',
		call: '4.32',
		ant: '4:15',
		loud: '1.89',
		interrupt: '1.89',
		dynamics: '',
		volume: '',
		selected: false,
	},
	{
		id: 7,
		name: 'Подкатегория 5',
		call: '4.32',
		ant: '4:15',
		loud: '1.89',
		interrupt: '1.89',
		dynamics: '',
		volume: '',
		selected: false,
	},
	{
		id: 7,
		name: 'Подкатегория 6',
		call: '4.32',
		ant: '4:15',
		loud: '1.89',
		interrupt: '1.89',
		dynamics: '',
		volume: '',
		selected: false,
	},
	{
		id: 8,
		name: 'Подкатегория 8',
		call: '4.32',
		ant: '4:15',
		loud: '1.89',
		interrupt: '1.89',
		dynamics: '',
		volume: '',
		selected: false,
	},
]

const columns: Column[] = [
	{ name: 'name', label: 'Название', field: 'name', sortable: true, align: 'left' },
	{ name: 'call', label: 'Звонки', field: 'call', sortable: true, align: 'right' },
	{
		name: 'ant',
		label: 'АНТ',
		field: 'ant',
		sortable: true,
		align: 'right',
		format: (val) => `${val} мин`,
	},
	{
		name: 'loud',
		label: 'Тишина',
		field: 'loud',
		sortable: true,
		align: 'right',
		format: (val) => `${val}%`,
	},
	{
		id: 4,
		name: 'interrupt',
		label: 'Перебивания',
		field: 'interrupt',
		sortable: true,
		align: 'right',
		format: (val) => `${val}%`,
	},
	{
		id: 5,
		name: 'dynamics',
		label: 'Динамика за период',
		field: 'dynamics',
		sortable: false,
		align: 'center',
	},
	{ id: 6, name: 'volume', label: 'Объем', field: 'volume', sortable: false, align: 'center' },
]

const columns1: Column[] = [
	{ name: 'name', label: 'Подкатегория', field: 'name', sortable: true, align: 'left' },
	{ name: 'call', label: 'Звонки', field: 'call', sortable: true, align: 'right' },
	{
		name: 'ant',
		label: 'АНТ',
		field: 'ant',
		sortable: true,
		align: 'right',
	},
	{
		name: 'loud',
		label: 'Тишина',
		field: 'loud',
		sortable: true,
		align: 'right',
	},
	{
		id: 4,
		name: 'interrupt',
		label: 'Перебивания',
		field: 'interrupt',
		sortable: true,
		align: 'right',
	},
	{
		id: 5,
		name: 'dynamics',
		label: 'Динамика за период',
		field: 'dynamics',
		sortable: false,
		align: 'center',
	},
	{ id: 6, name: 'volume', label: 'Объем', field: 'volume', sortable: false, align: 'center' },
]

const rows = [
	{
		id: 0,
		name: 'Продажи',
		call: '4.32',
		ant: '4:15',
		loud: '1.89',
		interrupt: '1.04',
		dynamics: '',
		volume: '',
		selected: false,
		classname: 'blue',
		options1: chartTable1,
		series1: seriesTable1,
		options2: chartTable4,
		series2: seriesTable4,
	},
	{
		id: 1,
		name: 'Сервис',
		call: '3.36',
		ant: '5:15',
		loud: '1.72',
		interrupt: '0.93',
		dynamics: '',
		volume: '',
		selected: false,
		classname: 'green',
		options1: chartTable1,
		series1: seriesTable2,
		options2: chartTable4,
		series2: seriesTable4,
	},
	{
		id: 2,
		name: 'Оплата',
		call: '4.32',
		ant: '4:18',
		loud: '1.45',
		interrupt: '2.58',
		dynamics: '',
		volume: '',
		selected: false,
		classname: 'orange',
		options1: chartTable1,
		series1: seriesTable3,
		options2: chartTable4,
		series2: seriesTable4,
	},
]

const selected: Ref<RowCategory[]> = ref([])
watch(selected.value, (value, oldvalue) => {
	if (value) {
		emit('select')
	}
})

const seriesTableBig1 = [{ name: 'Parameter', data: [55, 57, 65, 70, 77, 80, 67] }]
const chartTableDonutBig = {
	chartOptions: {
		chart: {
			type: 'donut',
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					legend: {
						position: 'right',
					},
				},
			},
		],
	},
}
const bigTable = ref(false)
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.table th {
	font-weight: normal;
}
.table tr {
	cursor: pointer;
}
.legend {
	width: 10px;
	height: 10px;
	background: #ccc;
	display: inline-block;
	margin-right: 0.5rem;

	&.blue {
		background: #249efa;
	}
	&.green {
		background: #24e6a4;
	}
	&.orange {
		background: #fdba3a;
	}
}
.up {
	margin-left: 0.5rem;
	color: green;
}
.down {
	margin-left: 0.5rem;
	color: darkred;
}
.big {
	font-weight: 600;
	font-size: 17px;
}
.graph:hover {
	outline: 1px solid #249efa;
}
.q-dialog .q-card {
	overflow: visible;
	position: relative;
	.close {
		z-index: 100;
		position: absolute;
		top: -1.2rem;
		right: -1.2rem;
	}
}
</style>
