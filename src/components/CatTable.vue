<template lang="pug">
q-table(:rows="props.rows"
	:columns='columns'
	row-key="id"
	flat
	binary-state-sort
	hide-bottom
	:rows-per-page-options="[0]"
	v-if="props.level < 3"
	).stikytable
	template(v-slot:top-row v-if="props.rows.length == 0")
		q-td(colspan="5").text-center Категория не настроена.
	template(v-slot:body-selection)
	template(v-slot:body="props")
		q-tr(:props="props" @click="select(props.row)" :class="{ selected : props.row.id === selected }")
			q-td(key="label" :props="props") {{ props.row.label }}
			q-td(key="call" :props="props") {{ props.row.call }}
			q-td(key="ant" :props="props") {{ props.row.ant }} мин.
			q-td(key="loud" :props="props") {{ props.row.loud }} %
			q-td(key="interrupt" :props="props") {{ props.row.interrupt }} %

</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { useStore } from '@/stores/store'

interface Row {
	id: number
	date: string
	group: string
	record: string
	operator: string
	client: string
	expand: boolean
}

const props = defineProps<{
	rows: String[]
	level: number
}>()

const columns: Column[] = [
	{ name: 'label', label: 'Подкатегория', field: 'label', sortable: true, align: 'left' },
	{ name: 'call', label: 'Звонки', field: 'call', sortable: true, align: 'right' },
	{
		name: 'ant',
		label: 'АНТ',
		field: 'ant',
		sortable: true,
		align: 'right',
		format: (val) => `${val} мин.`,
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
]

const mystore = useStore()
const selected: Ref<number | null> = ref(null)

const select = (e: Row) => {
	if (selected.value === null) {
		selected.value = e.id
	} else if (selected.value === e.id) {
		selected.value = null
	} else {
		selected.value = e.id
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.q-table tbody tr.selected td::after {
	background: transparent;
}
.selected {
	background: $bgSelection;
}
</style>
