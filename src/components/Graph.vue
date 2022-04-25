<template lang="pug">
.grid
	div
		.zag Интегральная оценка
		q-card
			VueApexCharts(type="donut" height="302px" :options="options" :series="series")
			q-markup-table.tab
				tr
					td.desc Всего разговоров
					td 98
					td 34%
				tr
					td.desc
						span.blue Соответствует сценарию
					td 45
					td 6%
				tr
					td.desc
						span.green Частично соответствуют
					td 12
					td 4%
				tr
					td.desc
						span.orange Не соответствуют
					td 5
					td 7%
	div
		.zag Динамика за период
		q-card
			Zoomchart
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import Zoomchart from '@/components/Zoomchart.vue'

const series = [80, 55, 23]
const options = {
	chart: {
		type: 'donut',
	},
	labels: ['Не соответствует сценарию', 'Соответствует сценарию'],
	legend: {
		show: false,
		position: 'bottom',
	},
	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					width: 200,
				},
				legend: {
					position: 'bottom',
				},
			},
		},
	],
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.grid {
	margin-top: 2rem;
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 1rem;
}
.q-card {
	min-height: 100px;
	padding: 1rem;
}
.zag {
	font-size: 1rem;
	padding-left: 0.5rem;
}
.tab {
	font-size: 0.8rem;
	color: #666;
	margin: 3px auto;
	width: 80%;
}
td {
	padding: 1px 0;
	text-align: right;
	&.desc {
		text-align: left;
	}
	span:before {
		content: '';
		width: 8px;
		height: 8px;
		display: inline-block;
		margin-right: 0.5rem;
		border-radius: 8px;
	}
	span.blue:before {
		background: $primary;
	}
	span.green:before {
		background: green;
	}
	span.orange:before {
		background: orange;
	}
}
</style>
