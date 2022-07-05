<template lang="pug">
q-page(padding)
	.container
		q-table(:columns="columns"
			:rows="users"
			binary-state-sort
			:pagination="pagination"
			:filter="filter"
			rows-per-page-label="Строк на стр."
			row-key="id"
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
			template(v-slot:body-cell-del="props")
				q-td(:props="props")
					q-btn(flat round icon="mdi-trash-can-outline" size="sm" @click="kill(props.row)").hov
						//- q-badge(color="purple" :label="props.value")

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'

interface User {
	id: number
	fio?: string
	email: string
	password?: string
	region?: string[]
	group?: string[]
	oper?: string[]
}

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
		sortable: true,
		align: 'right',
		format: (val) => `${val.length}`,
	},
	{
		name: 'group',
		label: 'Группы',
		field: 'group',
		sortable: true,
		align: 'left',
		format: (val) => val.join(', '),
	},
	{
		name: 'del',
		label: '',
		field: 'del',
	},
]

const users: User[] = reactive([
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
])

const filter = ref('')
const pagination = ref({
	page: 1,
	rowsPerPage: 10,
})

const compare = (a: User, b: User) => {
	if (a.id > b.id) return 1
	if (a.id < b.id) return -1
	return 0
}

const undo = (e: User) => {
	users.push(e)
	users.sort(compare)
}
const show = (e: User) => {
	let message = e.email + ' - удалено.'
	$q.notify({
		message: message,
		color: 'negative',
		actions: [
			{
				label: 'Вернуть',
				color: 'white',
				handler: () => undo(e),
			},
		],
	})
}

const $q = useQuasar()
const kill = (e: User) => {
	const index = users.indexOf(e)
	users.splice(index, 1)
	show(e)
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
td {
	white-space: normal;
}
.hov {
	color: #aaa;
	&:hover {
		color: black;
	}
}
</style>
