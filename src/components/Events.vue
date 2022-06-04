<template lang="pug">
.grid
	.cat
		component(:is="CategoryTable")

	q-card
		component(:is="VueApexCharts" type="radialBar" height="220" :options="chartOptions1" :series="series" v-if="!sel.selection")
		component(:is="VueApexCharts" type="bar" height="183" :options="barOptions" :series="barSeries" v-else)

</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import CategoryTable from '@/components/CategoryTable.vue'
import { useSelect } from '@/stores/select'

const sel = useSelect()

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
@import '@/assets/styles/myvariables.scss';

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
