<template lang="pug">
q-expansion-item(v-model="rec")
	template(v-slot:header)
		q-item-section(avatar)
			q-avatar(icon="mdi-record-circle-outline" flat)
		q-item-section
			.zag Записи сеансов обслуживания
	q-card-section.q-px-md
		q-table(ref="table"
			:rows="records"
			:columns="columns"
			:selected-rows-label="getSelectedString"
			rows-per-page-label="Записей на странице"
			:filter="filter"
			:pagination="pagination"
			).table
			template(v-slot:top="props")
				.text-h6 Записи по вехам
				.grid
					q-select(label="Веха" :options="vehOptions" v-model="vehModel" dense)
					q-range(v-model="label" :min="0" :max="100" :step="4" label color="primary" label-always )
					.row.justify-end
						q-input(dense debounce="300" color="primary" v-model="filter" clearable)
							template(v-slot:prepend)
								q-icon(name="mdi-magnify")
						q-btn(flat round dense :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="togg").q-ml-md
			template(v-slot:body-selection)
			template(v-slot:body="props")
				q-tr(:props="props" @click="select(props.row)").rel
					q-td(key="date" :props="props") {{ props.row.date }}
					q-td(key="operator") {{props.row.operator}}
					q-td(key="client") {{props.row.client}}
					q-td(key="group") {{props.row.group}}
					q-td(key="record" v-html="props.row.record")
					q-btn(flat round color="primary" icon="mdi-download" size="sm" @click.stop="$q.notify({message: 'Запись скачана', icon: 'mdi-check'} )").dd
					.myplayer(v-if="selected === props.row.id")
						q-linear-progress(:value=".6" color="positive")
						div(v-if="!mystore.wide") {{props.row.date}}
						div(v-if="!mystore.wide") {{props.row.operator}}
						.player
							q-btn(round flat icon="mdi-rewind" @click.stop)
							q-btn(round flat icon="mdi-pause" @click.stop)
							q-btn(round flat icon="mdi-fast-forward" @click.stop)
						.time 02:31
						.row.items-center
							q-icon(name="mdi-volume-medium" size="sm")
							q-slider(color="primary" v-model="sound").slide
							q-icon(name="mdi-volume-high" size="sm")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { records } from '@/stores/operators'

const rec = ref(true)
const vehModel = ref('Приветствие')
const label = ref({ min: 0, max: 100 })
const filter = ref('')

interface Row {
	id: number
	date: string
	operator: string
	client: string
	group: string
	context: string
}

const vehOptions = [
	'Приветствие',
	'Назвать себя',
	'Локализация проблемы',
	'Просьба обождать',
	'Благодарность за ожид.',
	'Новые услуги',
	'Прощание',
]

const columns = [
	{ id: 0, name: 'date', label: 'Дата и время', field: 'date', align: 'left', sortable: true },
	{ id: 1, name: 'operator', label: 'Оператор', field: 'operator', align: 'left', sortable: true },
	{ id: 2, name: 'client', label: 'Клиент', field: 'client', align: 'left', sortable: true },
	{ id: 3, name: 'group', label: 'Группа', field: 'group', align: 'left', sortable: true },
	{ id: 4, name: 'context', label: 'Контекст', field: 'context', align: 'left', sortable: false },
	{},
]

const getSelectedString = (e: number) => {
	return `Выбран оператор`
}

const pagination = ref({
	sortBy: 'total' as keyof Row,
	descending: true,
	page: 1,
	rowsPerPage: 5,
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.grid {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 5rem;
	align-items: end;
}
.rel {
	position: relative;
	cursor: pointer;
	.dd {
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
		visibility: hidden;
	}
	&:hover {
		.dd {
			visibility: visible;
		}
	}
}
</style>
