<template lang="pug">
q-expansion-item(v-model="integ")
	template(v-slot:header)
		q-item-section(avatar)
			q-avatar(icon="mdi-abacus" flat)

		q-item-section
			.zag Интегральная оценка
	q-card-section
		.grid
			div
				.zg Соответствие сценарию
				q-card
					component(:is="VueApexCharts" type="donut" height="301px" :options="options" :series="series")
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
				.zg Динамика за период
				q-card
					Zoomchart1
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import Zoomchart1 from '@/components/Zoomchart1.vue'
import { ref } from 'vue'

const integ = ref(false)

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
	plotOptions: {
		pie: {
			donut: {
				size: '50%',
			},
		},
	},
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.grid {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 1rem;
}
.zg {
	font-size: 1rem;
	font-weight: 500;
}
.q-card {
	min-height: 100px;
	padding: 1rem;
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
