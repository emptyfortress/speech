<template lang="pug">
q-expansion-item(v-model="rec")
	template(v-slot:header)
		q-item-section(avatar)
			q-avatar(icon="mdi-record-circle-outline" flat)
		q-item-section
			.zag Записи сеансов обслуживания
	q-card-section.q-px-md.q-pt-md
		q-table(:rows="records"
			:columns="columns"
			selection="single"
			:selected-rows-label="getSelectedString"
			v-model:selected="selected"
			rows-per-page-label="Записей на странице"
			:rows-per-page-options='[10, 20, 50]'
			@row-click="(evt, row, index) => select(row)").table
			template(v-slot:body-selection)

q-dialog(v-model="player" no-backdrop-dismiss no-shake seamless position="bottom").player
	q-card(style="width: 650px")
		q-btn(color="red" round icon="mdi-close" size="sm").close
		q-linear-progress(:value="0.6" color="red")
		q-card-section.row.items-center.no-wrap
			div
				.text-weight-bold {{ selected[0].date}}
				.oper Оператор: {{ selected[0].operator}}
			q-space
			q-btn(flat round icon="mdi-rewind")
			q-btn(flat round icon="mdi-pause")
			q-btn(flat round icon="mdi-fast-forward")
			q-space
			.time 02:31

Teleport(to="#speech")
	.recdate(v-if="selected.length") {{ selected[0].date}}
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { records } from '@/stores/operators'
import { useStore } from '@/stores/store'

interface RecordColumn {
	name: string
	label: string
	field: string | ((row: any) => any)
	required?: boolean
	align?: 'left' | 'right' | 'center'
	sortable?: boolean
	sort?: (a: any, b: any, rowA: any, rowB: any) => number
	sortOrder?: 'ad' | 'da'
	format?: (val: any, row: any) => any
	style?: string | ((row: any) => string)
	classes?: string | ((row: any) => string)
	headerStyle?: string
	headerClasses?: string
}

interface Row {
	id: number
	date: string
	group: string
	record: string
	operator: string
	client: string
}

const mystore = useStore()
const rec = ref(false)
const selected: Ref<Row[]> = ref([])
const player = computed(() => {
	if (selected.value.length) {
		mystore.setRecord(selected.value[0].group)
		mystore.openSpeechDrawer()
		return true
	} else {
		mystore.closeSpeechDrawer()
		return false
	}
})
const select = (e: Row) => {
	if (selected.value.length === 0) {
		selected.value.push(e)
	} else if (selected.value[0].id === e.id) {
		selected.value = []
	} else {
		selected.value = []
		selected.value.push(e)
	}
}
const getSelectedString = (e: number) => {
	return `Выбрана ${e} запись`
}

const columns: RecordColumn[] = [
	{ name: 'date', label: 'Дата, время', align: 'left', field: 'date', sortable: true },
	{ name: 'operator', label: 'Оператор', align: 'left', field: 'operator', sortable: true },
	{ name: 'client', label: 'Клиент', align: 'left', field: 'client', sortable: true },
	{ name: 'group', label: 'Группа', align: 'left', field: 'group', sortable: true },
	{ name: 'record', label: 'Запись', align: 'left', field: 'record', sortable: true },
]
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.player .q-card {
	background: $blue-grey-9;
	color: white;
	position: relative;
	overflow: visible;
	.close {
		position: absolute;
		top: -13px;
		right: -13px;
	}
	.oper {
		color: #6d8e9e;
	}
	.time {
		font-size: 2rem;
		font-weight: lighter;
		letter-spacing: 1px;
	}
}
.recdate {
	font-weight: 600;
}
</style>
