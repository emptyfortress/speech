import { defineStore } from 'pinia'
import { deleteNodeFromTree } from '@/utils/utils'

export const useCat = defineStore({
	id: 'cat',
	state: () => ({
		cat: [
			{
				id: '0',
				label: 'Все категории',
				header: 'root',
				childs: [],
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
								id: '100',
								label: 'Холодные',
								childs: [{ id: '401', name: '', label: 'test', typ: 0 }],
							},
							{
								id: '101',
								label: 'Наводки',
								childs: [{ id: '402', name: '', label: 'test', typ: 0 }],
							},
						],
					},
					{
						id: '2',
						label: 'Сервис',
						childs: [],
					},
					{
						id: '3',
						label: 'Оплата',
						childs: [],
						children: [
							{ id: '202', label: 'Нал', childs: [] },
							{ id: '203', label: 'Безнал', childs: [] },
							{ id: '204', label: 'Крипта', childs: [] },
						],
					},
					{
						id: '4',
						label: 'Жалобы',
						childs: [],
					},
					{
						id: '5',
						label: 'Неисправности',
						childs: [],
					},
					{
						id: '6',
						label: 'Услуги',
						childs: [],
					},
					{
						id: '7',
						label: 'Работа',
						childs: [],
					},
					{
						id: '8',
						label: 'Регионы',
						childs: [],
					},
					{
						id: '9',
						label: 'Грубость',
						childs: [],
					},
					{
						id: '10',
						label: 'Остальное',
						childs: [],
					},
				],
			},
		],
	}),
	getters: {},
	actions: {
		killNode(id) {
			deleteNodeFromTree(this.cat[0], id)
		},
	},
})
