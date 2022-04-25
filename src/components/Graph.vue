<template lang="pug">
.grid
	div
		.zag Интегральная оценка
		q-card
			VueApexCharts(type="donut" height="402px" :options="options" :series="series")
	div
		.zag Динамика за период
		q-card
			ZoomChart
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import ZoomChart from '@/components/ZoomChart.vue'

const series = [80, 55]
const options = {
	chart: {
		type: 'donut',
	},
	labels: ['Не соответствует сценарию', 'Соответствует сценарию'],
	legend: {
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
</style>
