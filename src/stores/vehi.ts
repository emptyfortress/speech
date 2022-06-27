const cols: Column[] = [
	{ name: 'num', label: '', field: 'num', align: 'right', sortable: false },
	{ name: 'veha', label: 'Название', field: 'veha', align: 'left', sortable: true },
	{
		name: 'total',
		label: 'Выполнено',
		field: 'total',
		align: 'left',
		sortable: true,
	},
	{ name: 'percent', label: '%', field: 'total', align: 'right', sortable: true },
]

const rows = [
	{ id: 0, num: 1, veha: 'Приветствие', total: 345, percent: 23 },
	{ id: 1, num: 2, veha: 'Назвать себя', total: 345, percent: 23 },
	{ id: 2, num: 3, veha: 'Локализация проблемы', total: 345, percent: 23 },
	{ id: 3, num: 4, veha: 'Просьба обождать', total: 345, percent: 23 },
	{ id: 4, num: 5, veha: 'Благодарность за ожидание', total: 345, percent: 23 },
	{ id: 5, num: 6, veha: 'Новые услуги', total: 345, percent: 23 },
	{ id: 4, num: 7, veha: 'Прощание', total: 345, percent: 23 },
]

export { cols, rows }
