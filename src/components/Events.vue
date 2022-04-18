<template lang="pug">
.grid
	q-markup-table.cat
		thead
			tr
				th.text-left
				th.text-left Название
				th.text-right Звонки
				th.text-right АНТ
				th.text-right Тишина
				th.text-right Перебивания
				th.text-center Димамика за период
				th.text-center Объем
		tbody
			tr(v-for="row in rows" :key="row.id" @click="select(row.id)" :class="{ 'sel' : selection === row.id}")
				td
					.legend(:class="row.classname")
				td.text-left {{ row.title }}
				td.text-right {{ row.call }}<span class="up">&uarr;</span>
				td.text-right {{ row.ant }}<span class="down">&darr;</span>
				td.text-right {{ row.sound }}<span class="down">&uarr;</span>
				td.text-right {{ row.interrupt }}<span class="down">&uarr;</span>
				td.text-center.graph(@click.stop="showDialog1")
					VueApexCharts(type="line" height="35" width="150" :options="row.options1" :series="row.series1" )
				td.text-center.graph(@click.stop="showDialog2")
					VueApexCharts(type="donut" height="35" width="35" :options="row.options2" :series="row.series2" )

	q-card()
		VueApexCharts(type="radialBar" height="220" :options="chartOptions1" :series="series" v-if="selection === 0")
		VueApexCharts(type="bar" height="183" :options="barOptions" :series="barSeries" v-else)

q-dialog(v-model="dialog1")
	q-card(style="width: 900px; max-width: 80vw;")
		q-card-section
			VueApexCharts(type="area" :options="chartTableAreaBig" :series="seriesTableBig1")
q-dialog(v-model="dialog2")
	q-card(style="width: 600px; max-width: 80vw;")
		q-card-section
			VueApexCharts(type="donut" :options="chartTableDonutBig" :series="seriesTable4")
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

const seriesTableBig1 = [{ name: 'Parameter', data: [55, 57, 65, 70, 77, 80, 67] }]

const dialog1 = ref(false)
const dialog2 = ref(false)

const selection = ref(0)

const select = (e: any) => {
	if (selection.value === e) {
		selection.value = 0
	} else selection.value = e
}

const showDialog1 = () => {
	dialog1.value = true
}
const showDialog2 = () => {
	dialog2.value = true
}

const rows = [
	{
		id: 1,
		classname: 'blue',
		title: 'Продажи',
		call: '4.32',
		ant: '4:15 мин',
		sound: '1.89%',
		interrupt: '2.43%',
		options1: chartTable1,
		series1: seriesTable1,
		options2: chartTable4,
		series2: seriesTable4,
	},
	{
		id: 2,
		classname: 'green',
		title: 'Сервис',
		call: '7.32',
		ant: '3:05 мин',
		sound: '3.62%',
		interrupt: '4.56%',
		options1: chartTable1,
		series1: seriesTable2,
		options2: chartTable4,
		series2: seriesTable4,
	},
	{
		id: 3,
		classname: 'orange',
		title: 'Оплата',
		call: '15.3',
		ant: '1:07 мин',
		sound: '3.25%',
		interrupt: '0.35 %',
		options1: chartTable1,
		series1: seriesTable3,
		options2: chartTable4,
		series2: seriesTable4,
	},
]

const series = [76, 67, 61]

const chartOptions1 = {
	chart: {
		type: 'radialBar',
	},
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '13px',
				},
				value: {
					fontSize: '16px',
				},
				total: {
					show: true,
					label: 'Всего',
					fontSize: '20px',
					formatter: function () {
						// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						return 249
					},
				},
			},
		},
	},
	labels: ['Продажи', 'Сервис', 'Оплата'],
}

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

const barOptions = {
	chart: {
		type: 'bar',
		height: 183,
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '55%',
			endingShape: 'rounded',
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent'],
	},
	xaxis: {
		categories: ['Янв', 'Фев', 'Мар', 'Апр'],
	},
	yaxis: {
		title: {
			text: '$ (thousands)',
		},
	},
	fill: {
		opacity: 1,
	},
	tooltip: {
		y: {
			formatter: function (val: string) {
				return '$ ' + val + ' thousands'
			},
		},
	},
}

const barSeries = [
	{
		name: 'Продажи',
		data: [44, 55, 57, 56],
	},
	{
		name: 'Сервис',
		data: [76, 85, 101, 98],
	},
	{
		name: 'Оплата',
		data: [35, 41, 36, 26],
	},
]
</script>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	.cat {
		grid-column: 1/4;
		overflow: inherit;
	}
}
.q-table th {
	font-weight: 300;
}
.q-table tr {
	cursor: pointer;
	&.sel {
		background: #def0fd;
	}
	td {
		font-weight: 600;
		font-size: 16px;
		.up {
			margin-left: 0.5rem;
			color: green;
		}
		.down {
			margin-left: 0.5rem;
			color: darkred;
		}
		.legend {
			width: 10px;
			height: 10px;
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
		&.graph:hover {
			outline: 1px solid #249efa;
		}
	}
	td:nth-child(2) {
		font-weight: 400;
		font-size: 13px;
	}
}
</style>
