<template lang="pug">
.grid
	q-markup-table.cat
		thead
			tr
				th.text-left Название
				th.text-right Звонки
				th.text-right АНТ
				th.text-right Тишина
				th.text-right Перебивания
				th.text-center Димамика за период
				th.text-center Объем
		tbody
			tr(@click="test")
				td.text-left Продажи
				td.text-right 11.382<span class="up">&uarr;</span>
				td.text-right 3:05 мин<span class="down">&darr;</span>
				td.text-right 1.15%<span class="down">&uarr;</span>
				td.text-right 2.05%<span class="down">&uarr;</span>
				td.text-center
					VueApexCharts(type="line" height="35" width="150" :options="chartTable1" :series="seriesTable1")
				td.text-center
					VueApexCharts(type="donut" height="35" width="35" :options="chartTable4" :series="seriesTable4")
			tr(@click="test")
				td.text-left Сервис
				td.text-right 7.319<span class="up">&uarr;</span>
				td.text-right 4:15 мин<span class="down">&darr;</span>
				td.text-right 0.15%<span class="down">&uarr;</span>
				td.text-right 3.02%<span class="down">&uarr;</span>
				td.text-center
					VueApexCharts(type="line" height="35" width="150" :options="chartTable1" :series="seriesTable2")
				td.text-center
					VueApexCharts(type="donut" height="35" width="35" :options="chartTable4" :series="seriesTable5")
			tr(@click="test")
				td.text-left Оплата
				td.text-right 15.3<span class="up">&uarr;</span>
				td.text-right 1:07 мин<span class="down">&darr;</span>
				td.text-right 3.25%<span class="down">&uarr;</span>
				td.text-right 0.35%<span class="down">&uarr;</span>
				td.text-center
					VueApexCharts(type="line" height="35" width="150" :options="chartTable1" :series="seriesTable3")
				td.text-center
					VueApexCharts(type="donut" height="35" width="35" :options="chartTable4" :series="seriesTable6")

	q-card()
		VueApexCharts(type="radialBar" height="220" :options="chartOptions1" :series="series")
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

const test = (e: any) => {
	const rows = document.querySelectorAll('tr')
	rows.forEach((row) => row.classList.remove('sel'))
	// console.log(rows)
	e.target.parentNode.classList.add('sel')
	console.log(e.target.parentNode)
}

const showDialog = (e: number) => {
	dialog.value = true
	id.value = e
}

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
	&.sel {
		background: #daeffe;
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
	}
	td:first-child {
		font-weight: 400;
		font-size: 13px;
	}
}
</style>
