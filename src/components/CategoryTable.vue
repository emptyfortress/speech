<template lang="pug">
q-table(:rows="rows"
	:columns='columns'
	row-key="id"
	selection="single"
	v-model:selected="selected"
	binary-state-sort
	:pagination="pagination"
	).table.thinhd
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

// const props = defineProps<{
// 	columns: Column[]
// 	rows: Row[]
// }>()

const columns = [
	{ id: 0, name: 'name', label: 'Название', field: 'name', sortable: true },
	{ id: 1, name: 'call', label: 'Звонки', field: 'call', sortable: true },
	{ id: 2, name: 'ant', label: 'АНТ', field: 'ant', sortable: true },
	{ id: 3, name: 'loud', label: 'Тишина', field: 'loud', sortable: true },
	{ id: 4, name: 'interrupt', label: 'Перебивания', field: 'interrupt', sortable: true },
	{ id: 5, name: 'dynamics', label: 'Динамика за период', field: 'dynamics' },
	{ id: 6, name: 'volume', label: 'Объем', field: 'volume' },
]

const rows = [
	{
		id: 0,
		name: 'Продажи',
		call: '4.32',
		ant: '4:15 мин',
		loud: '1.89%',
		interrupt: '1.89%',
		dynamics: '',
		volume: '',
	},
	{
		id: 1,
		name: 'laksdj',
		call: '4.32',
		ant: '4:15 мин',
		loud: '1.89%',
		interrupt: '1.89%',
		dynamics: '',
		volume: '',
	},
	{
		id: 2,
		name: 'laksdj',
		call: '4.32',
		ant: '4:15 мин',
		loud: '1.89%',
		interrupt: '1.89%',
		dynamics: '',
		volume: '',
	},
]

const selected: Ref<Row[]> = ref([])

const pagination = ref({
	sortBy: 'total' as keyof Row,
	descending: true,
	page: 1,
	rowsPerPage: 5,
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.table th {
	font-weight: normal;
}
</style>
