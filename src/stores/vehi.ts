const cols: Column[] = [
	{ name: 'num', label: '', field: 'num', align: 'right', sortable: false },
	{ name: 'veha', label: 'Название', field: 'veha', align: 'left', sortable: true },
	{
		name: 'total',
		label: 'Выполнено',
		field: 'total',
		align: 'right',
		sortable: true,
	},
	{
		name: 'percent',
		label: '%',
		field: 'total',
		align: 'right',
		sortable: true,
	},
]

const rows = [
	{ id: 0, num: 1, veha: 'Приветствие', total: 345, percent: 98 },
	{ id: 1, num: 2, veha: 'Назвать себя', total: 280, percent: 80 },
	{ id: 2, num: 3, veha: 'Локализация проблемы', total: 179, percent: 91 },
	{ id: 3, num: 4, veha: 'Просьба обождать', total: 345, percent: 79 },
	{ id: 4, num: 5, veha: 'Благодарность за ожидание', total: 200, percent: 82 },
	{ id: 5, num: 6, veha: 'Новые услуги', total: 120, percent: 60 },
	{ id: 4, num: 7, veha: 'Прощание', total: 300, percent: 96 },
]

export { cols, rows }
