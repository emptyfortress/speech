<template lang="pug">
q-page(padding)
	.container
		q-table(:columns="columns"
			:rows="items"
			binary-state-sort
			:pagination="pagination"
			:filter="filter"
			selection="multiple"
			v-model:selected="selected"
			:selected-rows-label="label"
			rows-per-page-label="Строк на стр."
			).table
			template(v-slot:top="props")
				.zag
					q-icon(name="mdi-account-multiple").q-mr-md
					|Пользователи
					span.q-ml-md (3)
				q-space
				q-input(dense debounce="300" color="primary" v-model="filter" clearable)
					template(v-slot:prepend)
						q-icon(name="mdi-magnify")

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const columns: Column[] = [
	{ name: 'fio', label: 'ФИО', field: 'fio', sortable: true, align: 'left' },
	{ name: 'login', label: 'Логин', field: 'login', sortable: true, align: 'left' },
	{ name: 'region', label: 'Регион', field: 'region', sortable: true, align: 'left' },
	{ name: 'oper', label: 'Операторы', field: 'oper', sortable: false, align: 'left' },
	{ name: 'group', label: 'Группы операторов', field: 'group', sortable: false, align: 'left' },
]

const selected = ref([])
const filter = ref('')
const pagination = ref({
	page: 1,
	rowsPerPage: 10,
})
const label = () => {
	return `Выбрано ${selected.value.length} строк`
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
