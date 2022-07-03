<template lang="pug">
VueApexCharts(type="bar" height="270" :options="options" :series="series")
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

const series = [
	{
		name: 'AHT',
		data: [44, 55, 41, 43, 37, 21, 22],
	},
	{
		name: 'Тишина',
		data: [53, 32, 52, 43, 33, 32, 13],
	},
	{
		name: 'Перебивания',
		data: [12, 17, 9, 11, 11, 20, 15],
	},
]

const options = {
	chart: {
		type: 'bar',
		height: 270,
		stacked: true,
	},
	plotOptions: {
		bar: {
			horizontal: true,
		},
	},
	stroke: {
		width: 1,
		colors: ['#fff'],
	},
	title: {
		text: 'Операторы',
	},
	xaxis: {
		categories: [
			'Орлов П.',
			'Воробьева К.',
			'Синичкина Т.',
			'Гусев И.',
			'Соколова П.',
			'Воронов А.',
			'Сорокина М.',
		],
	},
	yaxis: {
		title: {
			text: undefined,
		},
	},
	fill: {
		opacity: 1,
	},
	legend: {
		position: 'bottom',
		horizontalAlign: 'center',
		// offsetX: 60,
	},
	colors: ['#29A1F9', '#FDB948', '#C72829'],
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
