import { defineStore } from 'pinia'
// import { randomNumber, randomArray, getMembers } from '@/utils/utils'

export const useCat = defineStore({
	id: 'cat',
	state: () => ({
		cat: [
			{
				id: '0',
				label: 'Все категории',
				header: 'root',
				children: [
					{
						id: '1',
						label: 'Продажи',
						childs: [
							{ id: '301', name: 'Подкатегория 1', label: 'Приветствие', typ: 1 },
							{ id: '302', name: 'Подкатегория 2', label: 'Прощание', typ: 1 },
							{ id: '303', name: 'Подкатегория 3', label: 'Жалобы', typ: 1 },
						],
						children: [
							{
								id: '200',
								label: 'Суперпродажи',
								childs: [{ id: '401', name: '', label: 'test', typ: 0 }],
							},
						],
					},
					{
						id: '2',
						label: 'Сервис',
					},
					{
						id: '3',
						label: 'Оплата',
						children: [
							{ id: '202', label: 'Нал', childs: [] },
							{ id: '203', label: 'Безнал', childs: [] },
							{ id: '204', label: 'Крипта', childs: [] },
						],
					},
					{
						id: '4',
						label: 'Жалобы',
					},
					{
						id: '5',
						label: 'Неисправности',
					},
					{
						id: '6',
						label: 'Услуги',
					},
					{
						id: '7',
						label: 'Работа',
					},
					{
						id: '8',
						label: 'Регионы',
					},
					{
						id: '9',
						label: 'Грубость',
					},
					{
						id: '10',
						label: 'Остальное',
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
