<template lang="pug">
q-page(padding)
	.container
		.notific
			q-table(:columns="columns"
				:rows="notifications"
				binary-state-sort
				:pagination="pagination"
				:filter="filter"
				color="primary"
				selection="multiple"
				v-model:selected="selected"
				:selected-rows-label="label"
				rows-per-page-label="Строк на стр."
				).table
				template(v-slot:top="props")
					.zag
						q-icon(name="mdi-bell-outline").q-mr-md
						|Уведомления
					q-space
					q-input(dense debounce="300" color="primary" v-model="filter" clearable)
						template(v-slot:prepend)
							q-icon(name="mdi-magnify")

			transition(name="slide-top")
				.mybuttons(v-show="selected.length")
					q-btn(color="primary" label="Прочитать" )
					q-btn(color="primary" label="Удалить" )

</template>

<script setup lang="ts">
import { notifications } from '@/stores/notifications'
import { ref } from 'vue'

const filter = ref('')
const selected = ref([])

const columns: Column[] = [
	{ name: 'date', label: 'Дата', field: 'date', sortable: true, align: 'left' },
	{ name: 'name', label: 'Ключевое слово', field: 'name', sortable: true, align: 'left' },
	{ name: 'channel', label: 'Канал', field: 'channel', sortable: true, align: 'left' },
]
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
.notific {
	max-width: 800px;
	height: 100%;
	margin: 0 auto;
}
.mybuttons {
	margin-top: 1rem;
	transition: 0.3s ease all;
	button {
		margin-right: 4px;
	}
}
</style>
