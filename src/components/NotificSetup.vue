<script setup lang="ts">
import { ref } from 'vue'
import type { QTableProps } from 'quasar'

const cols: QTableProps['columns'] = [
	{ name: 'keys', label: 'Ключевые слова', field: 'keys', sortable: true, align: 'left' },
	{ name: 'canal', label: 'Канал', field: 'canal', sortable: true, align: 'right' },
	{ name: 'actions', label: '', field: 'actions', sortable: false, align: 'right' },
]
const rows = ref([
	{ id: 0, keys: 'Слово 1', canal: 'Все' },
	{ id: 1, keys: 'Слово 2', canal: 'Все' },
	{ id: 2, keys: 'Слово 3', canal: 'Все' },
	{ id: 3, keys: 'Слово 4', canal: 'Все' },
	{ id: 4, keys: 'Слово 5', canal: 'Все' },
])
const inf = ref(true)
const options = ['Все', 'Клиент', 'Оператор']

const remove = (id: number) => {
	const ind = rows.value.findIndex((item) => item.id === id)
	rows.value.splice(ind, 1)
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
				q-popup-edit(v-model="props.row.keys" auto-save v-slot="scope").border-primary
					q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")

			q-td(key="canal" :props="props")
				|{{ props.row.canal }}
				q-popup-edit(v-model="props.row.canal" auto-save v-slot="scope").border-primary
					q-select(v-model="scope.value" dense autofocus @keyup.enter="scope.set" :options="options")
			q-td(key="actions" :props="props")
				q-btn(dense size="sm" flat round icon="mdi-trash-can-outline" @click="remove(props.row.id)").hid
					// q-menu
					// 	q-list
					// 		q-item(clickable v-close-popup).pink
					// 			q-item-section Удалить

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
</style>
