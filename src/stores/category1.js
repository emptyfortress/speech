import { defineStore } from 'pinia'
// import { randomNumber, randomArray, getMembers } from '@/utils/utils'

export const useCat = defineStore({
	id: 'cat',
	state: () => ({
		categories: [
			{
				id: 0,
				label: 'Все категории',
				header: 'root',
				children: [
					{
						id: 0,
						label: 'Продажи',
						childs: [
							{ id: 301, name: 'Подкатегория 1', label: 'Приветствие', typ: 1 },
							{ id: 302, name: 'Подкатегория 2', label: 'Прощание', typ: 1 },
							{ id: 303, name: 'Подкатегория 3', label: 'Жалобы', typ: 1 },
						],
						children: [
							{
								id: 200,
								label: 'Суперпродажи',
								childs: [{ id: 401, name: '', label: 'test', typ: 0 }],
							},
						],
					},
					{
						id: 1,
						label: 'Сервис',
						childs: [],
						children: [],
					},
					{
						id: 2,
						label: 'Оплата',
						children: [
							{ id: 202, label: 'Нал', childs: [] },
							{ id: 203, label: 'Безнал', childs: [] },
							{ id: 204, label: 'Крипта', childs: [] },
						],
						childs: [],
					},
					{
						id: 3,
						label: 'Жалобы',
						childs: [],
						children: [],
					},
					{
						id: 4,
						label: 'Неисправности',
						childs: [],
						children: [],
					},
					{
						id: 5,
						label: 'Услуги',
						childs: [],
						children: [],
					},
					{
						id: 6,
						label: 'Работа',
						childs: [],
						children: [],
					},
					{
						id: 7,
						label: 'Регионы',
						childs: [],
						children: [],
					},
					{
						id: 8,
						label: 'Грубость',
						childs: [],
						children: [],
					},
					{
						id: 9,
						label: 'Остальное',
						childs: [],
						children: [],
					},
				],
			},
		],
	}),
	getters: {},
	actions: {
		addCategory(payload, node) {},
	},
})
