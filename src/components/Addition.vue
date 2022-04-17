<template lang="pug">
.grid
	q-card.tags
		canvas#canvas
	q-card
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js'
import { WordCloudChart } from 'chartjs-chart-wordcloud'
import { ref, onMounted } from 'vue'
Chart.register(...registerables)

const words = [
	{ key: 'word', value: 10 },
	{ key: 'words', value: 8 },
	{ key: 'sprite', value: 7 },
	{ key: 'placed', value: 5 },
	{ key: 'layout', value: 4 },
	{ key: 'algorithm', value: 4 },
	{ key: 'area', value: 4 },
	{ key: 'without', value: 3 },
	{ key: 'step', value: 3 },
]

const data = {
	labels: words.map((d) => d.key),
	datasets: [
		{
			label: '',
			data: words.map((d) => 6 + d.value * 5),
		},
	],
}

onMounted(() => {
	console.log('fuck')

	const canvas = <HTMLCanvasElement>document.getElementById('canvas')
	const chart = new WordCloudChart(canvas.getContext('2d'), {
		data: data,
		options: {
			title: {
				display: true,
				text: 'Chart.js Word Cloud',
			},
		},
	})
})
</script>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	div {
		background: white;
		min-height: 100px;
	}
}
.tags {
	width: 100%;
	height: 300px;
}
</style>
