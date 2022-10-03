<template lang="pug">
.gridcat
	q-table(:columns="columns"
		ref="table"
		:rows="rows"
		no-data-label="Категории не настроены"
		:rows-per-page-options="[0]"
		hide-bottom
		).table
		template(v-slot:top)
			.zag.cursor-pointer
				|{{cat.catselect}}
				q-icon(name="mdi-menu-down")
				q-menu
					q-list
						template(v-for="item in cat.cat[0].children" :key="item.id" )
							q-item(clickable v-close-popup @click="selectCat(item.label)" :class="{'selected' : item.label === cat.catselect}")
								q-item-section
									q-item-label {{ item.label }}
		template(v-slot:body="props")
			q-tr(:props="props")
				q-td(key="label" :props="props") {{ props.row.label }}
				q-td(key="call" :props="props") {{ props.row.call }}
				q-td(key="ant" :props="props") {{ props.row.ant }}
				q-td(key="loud" :props="props") {{ props.row.loud }}
				q-td(key="interrupt" :props="props") {{ props.row.interrupt }}

	q-card.graph
		component(ref="chart" :is="VueApexCharts" type="bar" :options="coolOptions" :series="coolSeries" :height="calcHeight").chh
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCat } from '@/stores/category1'
import VueApexCharts from 'vue3-apexcharts'
import { randomArray } from '@/utils/utils'

const cat = useCat()
const table = ref()

const chart = ref()

const selectCat = (label: string) => {
	cat.setCatselect(label)
}

const calcHeight = computed(() => {
	let rows = cat.rowNum
	return rows * 50 + 42 + 'px'
})

const rows = computed(() => {
	let cur = cat.cat[0].children.filter((e: any) => e.label === cat.catselect)
	return cur[0].children
})

const columns: Column[] = [
	{ name: 'label', label: 'Категории', field: 'label', sortable: true, align: 'left' },
	{ name: 'call', label: 'Звонки', field: 'call', sortable: true, align: 'right' },
	{
		name: 'ant',
		label: 'АНТ, мин',
		field: 'ant',
		sortable: true,
		align: 'right',
	},
	{
		name: 'loud',
		label: 'Тишина, %',
		field: 'loud',
		sortable: true,
		align: 'right',
	},
	{
		id: 4,
		name: 'interrupt',
		label: 'Перебивания, %',
		field: 'interrupt',
		sortable: true,
		align: 'right',
	},
]

const coolOptions = computed(() => {
	return {
		chart: {
			type: 'bar',
			stacked: true,
			toolbar: {
				show: false,
			},
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
		xaxis: {
			categories: cat.getSubCat,
			labels: {
				show: false,
				minHeight: 0,
				maxHeight: 0,
			},
		},
		yaxis: {
			show: false,
			title: {
				text: undefined,
			},
		},
		fill: {
			opacity: 1,
		},
		legend: {
			show: true,
			position: 'top',
			horizontalAlign: 'center',
		},
		colors: ['#29A1F9', '#FDB948', '#C72829'],
	}
})

const coolSeries = computed(() => {
	return [
		{
			name: 'AHT',
			data: randomArray(cat.rowNum, 10, 40),
		},
		{
			name: 'Тишина',
			data: randomArray(cat.rowNum, 3, 15),
		},
		{
			name: 'Перебивания',
			data: randomArray(cat.rowNum, 7, 20),
		},
	]
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
//@import '@/assets/css/colors.scss';
.gridcat {
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 1rem;
	align-content: start;
}
.table {
	grid-column: 1/4;
}
.graph {
	grid-column: 4/6;
}
.selected {
	background: $bgSelection;
	color: $blue-9;
}
.chh {
	margin-top: 51px;
	// background: pink;
}
</style>
