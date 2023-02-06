<script setup lang="ts">
import { ref } from 'vue'
import type { QTableProps } from 'quasar'
import { useStore } from '@/stores/store'
import { words } from '@/stores/list'
import SvgIcon from '@/components/SvgIcon.vue'

const mystore = useStore()
const stringOptions = words
const options = ref(stringOptions)

const cols: QTableProps['columns'] = [
	{ name: 'keys', label: 'Ключевые слова', field: 'keys', sortable: true, align: 'left' },
	{ name: 'canal', label: 'Канал', field: 'canal', sortable: true, align: 'right' },
	{ name: 'actions', label: '', field: 'actions', sortable: false, align: 'right' },
]
const rows = ref([
	{ id: 0, keys: 'Приветствие', canal: 'Все' },
	{ id: 1, keys: 'Слово 2', canal: 'Все' },
	{ id: 2, keys: 'Слово 3', canal: 'Все' },
	{ id: 3, keys: 'Слово 4', canal: 'Все' },
	{ id: 4, keys: 'Слово 5', canal: 'Все' },
])
const inf = ref(true)
// const options = ['Все', 'Клиент', 'Оператор']

const remove = (id: number) => {
	const ind = rows.value.findIndex((item) => item.id === id)
	rows.value.splice(ind, 1)
}

const filterFn = (val, update, abort) => {
	update(() => {
		if (val === '') {
			options.value = stringOptions
		} else {
			const needle = val.toLowerCase()
			options.value = stringOptions.filter((v) => v.label.toLowerCase().indexOf(needle) > -1)
		}
	})
}
const changeWord = (e, a) => {
	e = a.opt.label
}
</script>

<template lang="pug">
.inf( v-if="inf") Чтобы изменить значения кликните по нему.
	q-btn(flat round icon="mdi-close" dense size="10px" @click="inf = false")
q-table(:columns="cols" :rows="rows" flat row-key="id")
	template(v-slot:body="props")
		q-tr(:props="props")
			q-td(key="keys" :props="props")
				|{{ props.row.keys }}

				q-popup-edit(v-model="props.row.keys" v-slot="scope")
					q-select(outlined v-model="scope.value"
						dense
						clearable
						use-input
						autofocus
						input-debounce="0"
						label="Ключевое слово, словарь"
						:options="options"
						@filter="filterFn"
						@keyup.enter="scope.set"
						behavior="menu").men

						template(v-slot:option="scope")
							q-item(clickable v-bind="scope.itemProps" @click="changeWord(props.row.keys, scope.itemProps)")
								q-item-section(side v-if="scope.opt.voc")
									component(:is="SvgIcon" name="vocabulary").lib
								q-item-section
									q-item-label {{scope.opt.label}}
						template(v-slot:no-option)
							q-item(clickable)
								q-item-section.text-grey No results
		
			q-td(key="canal" :props="props")
				|{{ props.row.canal }}
				q-popup-edit(v-model="props.row.canal" auto-save v-slot="scope").border-primary
					q-select(v-model="scope.value" dense autofocus @keyup.enter="scope.set" :options="options")
			q-td(key="actions" :props="props")
				q-btn(dense size="sm" flat round icon="mdi-trash-can-outline").hid
					q-menu
						q-list
							q-item(clickable v-close-popup @click="remove(props.row.id)").pink
								q-item-section Удалить

</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
tr {
	.hid {
		visibility: hidden;
	}
	&:hover {
		.hid {
			visibility: visible;
		}
	}
}
.inf {
	background: $bgLight;
	border: 1px solid #dedede;
	font-size: 0.7rem;
	padding: 0.3rem 0.6rem;
	margin-bottom: 2rem;
	position: relative;
	.q-btn {
		position: absolute;
		right: 3px;
		top: 2px;
	}
}
.men {
	width: 300px;
}
.lib {
	font-size: 0.8rem;
}
</style>
