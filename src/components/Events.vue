<template lang="pug">
.grid
	q-card(flat).cat
		q-markup-table
			thead
				tr
					th.text-left Название
					th.text-right Звонки
					th.text-right АНТ
					th.text-right Тишина
					th.text-right Перебивания
					th.text-right Прошлая неделя
					th.text-right Объем
			tbody
				tr
					td.text-left Продажи
					td.text-right 11.382<span class="up">&uarr;</span>
					td.text-right 3:05 мин<span class="down">&darr;</span>
					td.text-right 1.15%<span class="down">&uarr;</span>
					td.text-right 2.05%<span class="down">&uarr;</span>
					td
					td
				tr
					td.text-left Сервис
					td.text-right 11.383
					td.text-right 3:05 мин
					td.text-right 1.15%
					td.text-right 2.05%
					td
					td
				tr
					td.text-left Оплата
					td.text-right 11.383
					td.text-right 3:05 мин
					td.text-right 1.15%
					td.text-right 2.05%
					td
					td
	q-card(flat)
		p chart here

		//- div
		//- 	vue-apex-charts(type="radialBar" :options="chartOptions1" :series="series")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

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
const series = [76, 67, 61, 90]
const chartOptions = {
	chart: {
		height: 390,
		type: 'radialBar',
	},
	plotOptions: {
		radialBar: {
			offsetY: 0,
			startAngle: 0,
			endAngle: 270,
			hollow: {
				margin: 5,
				size: '30%',
				background: 'transparent',
				image: undefined,
			},
			dataLabels: {
				name: {
					show: false,
				},
				value: {
					show: false,
				},
			},
		},
	},
	colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
	labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
	legend: {
		show: true,
		floating: true,
		fontSize: '16px',
		position: 'left',
		offsetX: 160,
		offsetY: 15,
		labels: {
			useSeriesColors: true,
		},
		markers: {
			size: 0,
		},
		// formatter: function (seriesName, opts) {
		// 	return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex]
		// },
		itemMargin: {
			vertical: 3,
		},
	},
	responsive: [
		{
			breakpoint: 480,
			options: {
				legend: {
					show: false,
				},
			},
		},
	],
}

const chartOptions1 = {
	chart: {
		height: 350,
		type: 'radialBar',
	},
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '22px',
				},
				value: {
					fontSize: '16px',
				},
				total: {
					show: true,
					label: 'Total',
					formatter: function (w: number) {
						// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						return 249
					},
				},
			},
		},
	},
	labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';

.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.5rem;
	.cat {
		grid-column: 1/3;
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
