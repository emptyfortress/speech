<template lang="pug">
.grid
	q-card(flat v-for="event in events" @click="showDialog(event.id)")
		div
			vue-apex-charts(type="radialBar" :options="chartOptions" :series="series")
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
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';

.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.5rem;
	div {
		height: 100px;
		background: white;
	}
}
</style>
