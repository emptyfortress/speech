<template lang="pug">
q-expansion-item(v-model="oper").q-mt-md
	template(v-slot:header)
		q-item-section(avatar)
			q-avatar(icon="mdi-headset" flat)

		q-item-section
			.zag Статистика по операторам
	q-card-section.q-px-md.q-pt-md
		.grid
			q-table(:rows="rows" :columns='columns' row-key="name")
			q-card

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QTableProps } from 'quasar'

const oper = ref(true)

const columns: QTableProps['columns'] = [
	{
		name: 'name',
		required: true,
		label: 'Оператор',
		align: 'left',
		field: 'name',
		sortable: true,
	},
	{
		name: 'good',
		required: false,
		label: 'Соответствует сценарию',
		align: 'right',
		field: 'good',
		sortable: true,
	},
	{
		name: 'notgood',
		required: false,
		label: 'Частично соответствует',
		align: 'right',
		field: 'notgood',
		sortable: true,
	},
	{
		name: 'bad',
		required: false,
		label: 'Не соответствует',
		align: 'right',
		field: 'bad',
		sortable: true,
	},
]

const rows = [
	{ name: 'Vasya', good: 54, notgood: 21, bad: 12 },
	{ name: 'laks', good: 54, notgood: 21, bad: 12 },
	{ name: 'petya', good: 54, notgood: 21, bad: 12 },
	{ name: 'dima', good: 54, notgood: 21, bad: 12 },
]
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	.q-card {
		min-height: 100px;
	}
}
</style>
