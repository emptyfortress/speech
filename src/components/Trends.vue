<template lang="pug">
.grid
	q-card(flat v-for="trend in trends" @click="showDialog(trend.id)")
		#chart
			div(v-if="trend.id === 1" )
				vue-apex-charts(type="area" :options="chartOptions1" :series="series1")
			div(v-if="trend.id === 2" )
				vue-apex-charts(type="area" :options="chartOptions2" :series="series2")
			div(v-if="trend.id === 3" )
				vue-apex-charts(type="area" :options="chartOptions3" :series="series3")
			div(v-if="trend.id === 4" )
				vue-apex-charts(type="area" :options="chartOptions4" :series="series4")

q-dialog(v-model="dialog")
	q-card(style="width: 900px; max-width: 80vw;")
		q-card-section
			vue-apex-charts(type="area" :options="computeOptions" :series="computeSeries")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { chartOptions1, chartOptions2, chartOptions3, chartOptions4 } from '@/stores/charts1'

const trends = [
	{ id: 1, label: 'Вызовы' },
	{ id: 2, label: 'АНТ' },
	{ id: 3, label: 'Тишина' },
	{ id: 4, label: 'Перебивания' },
]
const series1 = [{ name: 'Вызовы', data: [55, 57, 65, 70, 77, 80, 67] }]
const series2 = [{ name: 'АНТ', data: [60, 57, 65, 67, 72, 42, 68] }]
const series3 = [{ name: 'Тишина', data: [20, 22, 18, 21, 23, 20, 24] }]
const series4 = [{ name: 'Перебивания', data: [15, 22, 18, 14, 13, 7, 3] }]

const dialog = ref(false)
const id = ref(0)
const showDialog = (e: number) => {
	dialog.value = true
	id.value = e
}

const computeOptions = computed(() => {
	switch (id.value) {
		case 1:
			return chartOptions1
		case 2:
			return chartOptions2
		case 3:
			return chartOptions3
		case 4:
			return chartOptions4
		default:
			return chartOptions1
	}
})

const computeSeries = computed(() => {
	switch (id.value) {
		case 1:
			return series1
		case 2:
			return series2
		case 3:
			return series3
		case 4:
			return series4
		default:
			return series1
	}
})
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
