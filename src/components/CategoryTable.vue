<template lang="pug">
q-table(:rows="rows"
	:columns='columns'
	row-key="id"
	selection="single"
	v-model:selected="selected"
	binary-state-sort
	hide-bottom
	).table.thinhd

	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(auto-width)
			q-th(v-for="col in props.cols" :key="col.name" :props="props") {{ col.label }}

	template(v-slot:body="props")
		q-tr(:props="props" @click="select(props.row)" )
			q-td(auto-width)
				q-btn(size="md" flat round dense @click.stop="props.expand = !props.expand" :icon="props.expand ? 'mdi-chevron-down' : 'mdi-chevron-right'")
			q-td(key="name" :props="props")
				.legend(:class="props.row.classname")
				span {{ props.row.name }}
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
			q-td()
			q-td()

		q-tr(v-show="props.expand" v-for="row in addition" :key="row.id" @click="select(row)" :class="{'selected' : row.selected}")
			q-td
			q-td(v-for="col in props.cols" :key="col.name" :props="props") val
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

// const props = defineProps<{
// 	columns: Column[]
// 	rows: Row[]
// }>()

// const select = (e: RowCategory) => {
// 	if (selected.value[0] === e) {
// 		selected.value = []
// 	} else selected.value[0] = e
// }

const select = (e: RowCategory) => {
	if (selected.value.length === 0) {
		selected.value.push(e)
	} else if (selected.value[0].id === e.id) {
		selected.value = []
	} else {
		selected.value = []
		selected.value.push(e)
	}
}

const addition: RowCategory[] = [
	{
		id: 4,
		name: 'Bunt',
		call: '4.32',
		ant: '4:15 мин',
		loud: '1.89%',
		interrupt: '1.89%',
		dynamics: '',
		volume: '',
		selected: false,
	},
]

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

const rows = [
	{
		id: 0,
		name: 'Продажи',
		call: '4.32',
		ant: '4:15',
		loud: '1.89',
		interrupt: '1.89',
		dynamics: '',
		volume: '',
		selected: false,
		classname: 'blue',
	},
	{
		id: 1,
		name: 'Сервис',
		call: '4.32',
		ant: '5:15',
		loud: '1.89',
		interrupt: '1.89',
		dynamics: '',
		volume: '',
		selected: false,
		classname: 'green',
	},
	{
		id: 2,
		name: 'Оплата',
		call: '4.32',
		ant: '4:18',
		loud: '1.89',
		interrupt: '1.89',
		dynamics: '',
		volume: '',
		selected: false,
		classname: 'orange',
	},
]

const selected: Ref<RowCategory[]> = ref([])
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.table th {
	font-weight: normal;
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
// .q-table tbody {
// 	td {
// 		font-weight: 600;
// 		font-size: 17px;
// 	}
// 	td:nth-child(2) {
// 		font-weight: 400;
// 		font-size: 13px;
// 	}
// }
</style>
