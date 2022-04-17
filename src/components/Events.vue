<template lang="pug">
.grid
	//- q-card(flat).cat
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
			tr
				td.text-left Продажи
				td.text-right 11.382<span class="up">&uarr;</span>
				td.text-right 3:05 мин<span class="down">&darr;</span>
				td.text-right 1.15%<span class="down">&uarr;</span>
				td.text-right 2.05%<span class="down">&uarr;</span>
				td.text-center
					vue-apex-charts(type="line" height="35" width="150" :options="chartTable1" :series="seriesTable1")
				td.text-center
					vue-apex-charts(type="donut" height="35" width="35" :options="chartTable4" :series="seriesTable4")
			tr
				td.text-left Сервис
				td.text-right 11.382<span class="up">&uarr;</span>
				td.text-right 3:05 мин<span class="down">&darr;</span>
				td.text-right 1.15%<span class="down">&uarr;</span>
				td.text-right 2.05%<span class="down">&uarr;</span>
				td.text-center
					vue-apex-charts(type="line" height="35" width="150" :options="chartTable1" :series="seriesTable1")
				td.text-center
					vue-apex-charts(type="donut" height="35" width="35" :options="chartTable4" :series="seriesTable4")
			tr
				td.text-left Оплата
				td.text-right 11.382<span class="up">&uarr;</span>
				td.text-right 3:05 мин<span class="down">&darr;</span>
				td.text-right 1.15%<span class="down">&uarr;</span>
				td.text-right 2.05%<span class="down">&uarr;</span>
				td.text-center
					vue-apex-charts(type="line" height="35" width="150" :options="chartTable1" :series="seriesTable1")
				td.text-center
					vue-apex-charts(type="donut" height="35" width="35" :options="chartTable4" :series="seriesTable4")
	q-card()
		div
			vue-apex-charts(type="radialBar" height="220" :options="chartOptions1" :series="series")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { chartTable1, seriesTable1, chartTable4, seriesTable4 } from '@/stores/charts1'

const events = [
	{ id: 1, label: 'Категории' },
	{ id: 2, label: 'События' },
]

const dialog = ref(false)
const id = ref(0)
const showDialog = (e: number) => {
	dialog.value = true
	id.value = e
}
const series = [76, 67, 61]

const chartOptions1 = {
	chart: {
		// height: 350,
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
//@import '@/assets/css/colors.scss';

.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 0.5rem;
	.cat {
		grid-column: 1/4;
		overflow: inherit;
	}
}
.q-table th {
	font-weight: 300;
}
.q-table tr {
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
