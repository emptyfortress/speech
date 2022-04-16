<template lang="pug">
.grid
	q-card(flat v-for="trend in trends")
		#chart
			div(v-if="trend.id === 0" )
				vue-apex-charts(type="area" :options="chartOptions1" :series="series1")
			div(v-if="trend.id === 1" )
				vue-apex-charts(type="area" :options="chartOptions2" :series="series2")
			div(v-if="trend.id === 2" )
				vue-apex-charts(type="area" :options="chartOptions3" :series="series3")
			div(v-if="trend.id === 3" )
				vue-apex-charts(type="area" :options="chartOptions4" :series="series4")

</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { chartOptions1, chartOptions2, chartOptions3, chartOptions4 } from '@/stores/charts1'

const trends = [
	{ id: 0, label: 'Вызовы' },
	{ id: 1, label: 'АНТ' },
	{ id: 2, label: 'Тишина' },
	{ id: 3, label: 'Перебивания' },
]
const series1 = [{ name: 'Вызовы', data: [55, 57, 65, 70, 77, 80, 67] }]
const series2 = [{ name: 'АНТ', data: [60, 57, 65, 67, 72, 42, 68] }]
const series3 = [{ name: 'Тишина', data: [20, 22, 18, 21, 23, 20, 24] }]
const series4 = [{ name: 'Перебивания', data: [15, 22, 18, 14, 13, 7, 3] }]
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 0.5rem;
	.q-card {
		padding: 0.5rem;
		padding-bottom: 0;
	}
}
</style>
