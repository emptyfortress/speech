<template lang="pug">
q-table(:rows="rows"
	:columns='columns'
	row-key="id"
	selection="single"
	v-model:selected="selected"
	binary-state-sort
	hide-bottom
	:rows-per-page-options="[0]"
	).table.thinhd

	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(v-for="col in props.cols" :key="col.name" :props="props") {{ col.label }}
			q-th(auto-width)

	template(v-slot:body="props")
		q-tr(:props="props" @click="select(props.row)" )
			q-td(key="name" :props="props")
				//- .legend(:class="props.row.classname")
				span {{ props.row.label }}
			q-td(key="call" :props="props").big
				|{{ props.row.call }}
				span.up &uarr;
			q-td(key="ant" :props="props").big
				|{{ props.row.ant }} мин
				span.down &darr;
			q-td(key="loud" :props="props").big
				|{{ props.row.loud }}%
				span.up &uarr;
			q-td(key="interrupt" :props="props").big
				|{{ props.row.interrupt }}%
				span.up &uarr;
			q-td(@click.stop="showDialog1").graph
				component(:is="VueApexCharts" type="line" height="35" width="110" :options="sparkLine" :series="props.row.spark" )
			q-td(@click.stop="showDialog2").graph
				component(:is="VueApexCharts" type="donut" height="35" width="35" :options="sparkDonut" :series="props.row.donut" )

			q-td(auto-width)
				q-btn(size="md" flat round dense icon="mdi-chevron-right" @click.stop="bigTable = true")

q-dialog(v-model="bigTable")
	q-card(style="width: 800px; max-width: 80vw;")
		q-btn(round color="negative" icon="mdi-close" @click="bigTable = false").close
		q-card-section
			q-table(:rows="addition"
				:columns="columns1"
				row-key="id"
				binary-state-sort
				flat
				:pagination="pagination"
				rows-per-page-label="Записей на странице"
				)
				template(v-slot:top)
					.text-h6 Название категории
					q-space
					q-input(dense debounce="300" color="primary" clearable v-model="fil")
						template(v-slot:prepend)
							q-icon(name="mdi-magnify")


q-dialog(v-model="dialog1")
	q-card(style="width: 900px; max-width: 80vw;")
		q-btn(round color="negative" icon="mdi-close" @click="dialog1 = false").close
		q-card-section
			component(:is="VueApexCharts" type="area" :options="chartTableAreaBig" :series="seriesTable1")

q-dialog(v-model="dialog2")
	q-card(style="width: 600px; max-width: 80vw;")
		q-btn(round color="negative" icon="mdi-close" @click="dialog2 = false").close
		q-card-section
			VueApexCharts(type="donut" :options="chartTableDonutBig" :series="seriesTable4")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { chartTableAreaBig, seriesTable1, chartTableDonutBig, seriesTable4 } from '@/stores/charts1'
import { useCategory } from '@/stores/category'
import { addition } from '@/stores/addition'

const fil = ref('')
const dialog1 = ref(false)
const dialog2 = ref(false)
const showDialog1 = () => {
	dialog1.value = true
}
const showDialog2 = () => {
	dialog2.value = true
}

const cat = useCategory()

const rows = computed(() => {
	return cat.categories.filter((e) => e.selected)
})

const select = (e: RowCategory) => {
	if (selected.value.length === 0) {
		selected.value.push(e)
		cat.setSelection(true)
	} else if (selected.value[0].id === e.id) {
		selected.value = []
		cat.setSelection(false)
	} else {
		selected.value = []
		selected.value.push(e)
		cat.setSelection(true)
	}
}

const columns: Column[] = [
	{ name: 'name', label: 'Название', field: 'name', sortable: true, align: 'left' },
	{ name: 'call', label: 'Звонки', field: 'call', sortable: true, align: 'right' },
	{
		name: 'ant',
		label: 'АНТ',
		field: 'ant',
		sortable: true,
		align: 'right',
		format: (val) => `${val} мин`,
	},
	{
		name: 'loud',
		label: 'Тишина',
		field: 'loud',
		sortable: true,
		align: 'right',
		format: (val) => `${val}%`,
	},
	{
		id: 4,
		name: 'interrupt',
		label: 'Перебивания',
		field: 'interrupt',
		sortable: true,
		align: 'right',
		format: (val) => `${val}%`,
	},
	{
		id: 5,
		name: 'dynamics',
		label: 'Динамика за период',
		field: 'dynamics',
		sortable: false,
		align: 'center',
	},
	{ id: 6, name: 'volume', label: 'Объем', field: 'volume', sortable: false, align: 'center' },
]

const columns1: Column[] = [
	{ name: 'name', label: 'Подкатегория', field: 'name', sortable: true, align: 'left' },
	{ name: 'call', label: 'Звонки', field: 'call', sortable: true, align: 'right' },
	{
		name: 'ant',
		label: 'АНТ',
		field: 'ant',
		sortable: true,
		align: 'right',
	},
	{
		name: 'loud',
		label: 'Тишина',
		field: 'loud',
		sortable: true,
		align: 'right',
	},
	{
		id: 4,
		name: 'interrupt',
		label: 'Перебивания',
		field: 'interrupt',
		sortable: true,
		align: 'right',
	},
]

const selected: Ref<RowCategory[]> = ref([])

const sparkLine = {
	chart: {
		type: 'line',
		height: 35,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		width: 3,
		curve: 'smooth',
	},
	tooltip: {
		enabled: false,
		x: {
			show: false,
		},
		y: {
			title: {
				formatter: function () {
					return ''
				},
			},
		},
		marker: {
			show: false,
		},
	},
}

const sparkDonut = {
	chart: {
		type: 'donut',
		width: 35,
		height: 35,
		sparkline: {
			enabled: true,
		},
	},
	stroke: {
		width: 1,
	},
	tooltip: {
		enabled: false,
	},
	plotOptions: {
		pie: {
			expandOnClick: false,
		},
	},
}

const bigTable = ref(false)

const pagination = ref({
	sortBy: 'name' as keyof RowCategory,
	descending: true,
	page: 1,
	rowsPerPage: 10,
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.table {
	width: 100%;
}
.table th {
	font-weight: normal;
}
.table tr {
	cursor: pointer;
}
.legend {
	width: 10px;
	height: 10px;
	background: #ccc;
	display: inline-block;
	margin-right: 0.5rem;

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
.up {
	margin-left: 0.5rem;
	color: green;
}
.down {
	margin-left: 0.5rem;
	color: darkred;
}
.big {
	font-weight: 600;
	font-size: 17px;
}
.graph:hover {
	outline: 1px solid #249efa;
	user-select: none;
}
</style>
