<template lang="pug">
q-page(padding)
	.container
		q-table(:columns="columns"
			:rows="users"
			binary-state-sort
			:pagination="pagination"
			:filter="filter"
			rows-per-page-label="Строк на стр."
			).table
			template(v-slot:top="props")
				.zag
					q-icon(name="mdi-account-multiple").q-mr-md
					|Пользователи
					span.q-ml-md ({{users.length}})
				q-space
				q-input(dense debounce="300" color="primary" v-model="filter" clearable)
					template(v-slot:prepend)
						q-icon(name="mdi-magnify")

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const columns: Column[] = [
	{ name: 'email', label: 'Email', field: 'email', sortable: true, align: 'left' },
	{ name: 'password', label: 'Пароль', field: 'password', sortable: false, align: 'left' },
	// { name: 'fio', label: 'ФИО', field: 'fio', sortable: true, align: 'left' },
	{
		name: 'region',
		label: 'Регион',
		field: 'region',
		sortable: true,
		align: 'left',
		format: (val) => val.join(', '),
	},
	{
		name: 'oper',
		label: 'Операторы',
		field: 'oper',
		sortable: false,
		align: 'right',
		format: (val) => `${val.length} чел.`,
	},
	{
		name: 'group',
		label: 'Группы',
		field: 'group',
		sortable: false,
		align: 'left',
		format: (val) => val.join(', '),
	},
]

const users = [
	{
		id: 0,
		fio: 'Соловьев П.С.',
		email: 'solo@gmail.com',
		region: ['Центр', 'Восток'],
		group: ['Группа 1', 'Сервисная служба'],
		oper: ['Екатерина', 'Елена', 'Ксения', 'Ирина', 'Ева', 'Дарья', 'Кира'],
	},
	{
		id: 1,
		fio: 'Воронин Т.П.',
		email: 'vor@gmail.com',
		region: ['Восток'],
		group: ['Сервисная служба'],
		oper: [
			'Софья',
			'Алина',
			'Злата',
			'Милана',
			'Ольга',
			'Светлана',
			'Ярослава',
			'Яна',
			'Кристина',
			'Алиса',
			'Маргарита',
			'Таисия',
			'Тамара',
			'Эмилия',
			'Диана',
			'Анфиса',
		],
	},
	{
		id: 2,
		fio: 'Орлова Г.Н.',
		email: 'orlova@gmail.com',
		region: ['Центр'],
		group: ['Сервисная служба'],
		oper: [
			'Диана',
			'Анфиса',
			'Аделина',
			'Евдокия',
			'Зоя',
			'Ираида',
			'Наталья',
			'Пелагея',
			'Сабина',
			'Антонина',
		],
	},
]

const filter = ref('')
const pagination = ref({
	page: 1,
	rowsPerPage: 10,
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
td {
	white-space: normal;
}
</style>
