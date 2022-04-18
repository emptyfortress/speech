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
			tr(@click="select")
				td
					.legend.blue
				td.text-left Продажи
				td.text-right 11.382<span class="up">&uarr;</span>
				td.text-right 3:05 мин<span class="down">&darr;</span>
				td.text-right 1.15%<span class="down">&uarr;</span>
				td.text-right 2.05%<span class="down">&uarr;</span>
				td.text-center.graph
					VueApexCharts(type="line" height="35" width="150" :options="chartTable1" :series="seriesTable1" @click="showDialog")
				td.text-center.graph
					VueApexCharts(type="donut" height="35" width="35" :options="chartTable4" :series="seriesTable4")
			tr(@click="select")
				td
					.legend.green
				td.text-left Сервис
				td.text-right 7.319<span class="up">&uarr;</span>
				td.text-right 4:15 мин<span class="down">&darr;</span>
				td.text-right 0.15%<span class="down">&uarr;</span>
				td.text-right 3.02%<span class="down">&uarr;</span>
				td.text-center.graph
					VueApexCharts(type="line" height="35" width="150" :options="chartTable1" :series="seriesTable2")
				td.text-center.graph
					VueApexCharts(type="donut" height="35" width="35" :options="chartTable4" :series="seriesTable5")
			tr(@click="select")
				td
					.legend.orange
				td.text-left Оплата
				td.text-right 15.3<span class="up">&uarr;</span>
				td.text-right 1:07 мин<span class="down">&darr;</span>
				td.text-right 3.25%<span class="down">&uarr;</span>
				td.text-right 0.35%<span class="down">&uarr;</span>
				td.text-center.graph
					VueApexCharts(type="line" height="35" width="150" :options="chartTable1" :series="seriesTable3")
				td.text-center.graph
					VueApexCharts(type="donut" height="35" width="35" :options="chartTable4" :series="seriesTable6")

	q-card()
		VueApexCharts(type="radialBar" height="220" :options="chartOptions1" :series="series")

q-dialog(v-model="dialog")
	q-card(style="width: 900px; max-width: 80vw;")
		q-card-section
			VueApexCharts(type="area" :options="computeOptions" :series="computeSeries")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import {
	chartTable1,
	seriesTable1,
	seriesTable2,
	seriesTable3,
	chartTable4,
	seriesTable4,
	seriesTable5,
	seriesTable6,
} from '@/stores/charts1'

const dialog = ref(false)
const id = ref(0)
// const selection = ref(false)

const select = (e: any) => {
	const rows = document.querySelectorAll('tr')
	rows.forEach((row) => row.classList.remove('sel'))
	e.target.parentNode.classList.add('sel')
}

const showDialog = (e: number) => {
	dialog.value = true
	id.value = e
}

const computeOptions = computed(() => {
	switch (id.value) {
		case 1:
			return chartTable1
		case 2:
			return chartTable2
		case 3:
			return chartTable3
		case 4:
			return chartTable4
		default:
			return chartTable1
	}
})

const computeSeries = computed(() => {
	switch (id.value) {
		case 1:
			return seriesTable1
		case 2:
			return seriesTable2
		case 3:
			return seriesTable3
		case 4:
			return seriesTable4
		default:
			return seriesTable1
	}
})

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
					formatter: function (w: number) {
						// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						return 249
					},
				},
			},
		},
	},
	labels: ['Продажи', 'Сервис', 'Оплата'],
}
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
