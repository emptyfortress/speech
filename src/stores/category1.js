import { defineStore } from 'pinia'
import { deleteNodeFromTree, insertNodeIntoTree } from '@/utils/utils'

export const useCat = defineStore({
	id: 'cat',
	state: () => ({
		cat: [
			{
				id: '0',
				label: 'Дерево категорий',
				header: 'root',
				level: 0,
				breads: [],
				childs: [],
				children: [
					{
						id: '1',
						label: 'Продажи',
						level: 1,
						breads: ['Тема'],
						children: [
							{
								id: '100',
								label: 'Холодные',
								breads: ['Тема', 'Продажи'],
								level: 2,
								childs: [{ id: '401', name: '', label: 'test', typ: 0 }],
								children: [],
							},
							{
								id: '101',
								label: 'Наводки',
								level: 2,
								breads: ['Тема', 'Продажи'],
								childs: [{ id: '402', name: '', label: 'test', typ: 0 }],
								children: [],
							},
						],
					},
					{
						id: '2',
						label: 'Сервис',
						level: 1,
						breads: ['Тема'],
						childs: [],
						children: [],
					},
					{
						id: '3',
						label: 'Оплата',
						level: 1,
						breads: ['Тема'],
						childs: [],
						children: [
							{
								id: '202',
								label: 'Нал',
								level: 2,
								breads: ['Тема', 'Оплата'],
								childs: [],
								children: [],
							},
							{
								id: '203',
								label: 'Безнал',
								level: 2,
								breads: ['Тема', 'Оплата'],
								childs: [],
								children: [],
							},
							{
								id: '204',
								label: 'Крипто',
								level: 2,
								breads: ['Тема', 'Оплата'],
								childs: [],
								children: [],
							},
						],
					},
					{
						id: '4',
						label: 'Жалобы',
						level: 1,
						breads: ['Тема'],
						childs: [],
						children: [],
					},
					{
						id: '5',
						label: 'Неисправности',
						level: 1,
						breads: ['Тема'],
						childs: [],
						children: [],
					},
					{
						id: '6',
						label: 'Услуги',
						level: 1,
						breads: ['Тема'],
						childs: [],
						children: [],
					},
					{
						id: '7',
						label: 'Работа',
						level: 1,
						breads: ['Тема'],
						childs: [],
						children: [],
					},
					{
						id: '8',
						label: 'Регионы',
						level: 1,
						breads: ['Тема'],
						childs: [],
						children: [],
					},
					{
						id: '9',
						label: 'Грубость',
						level: 1,
						breads: ['Тема'],
						childs: [],
						children: [],
					},
					{
						id: '10',
						label: 'Остальное',
						level: 1,
						breads: ['Тема'],
						childs: [],
						children: [],
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
		addCategory(newItem, id) {
			insertNodeIntoTree(this.cat[0], id, newItem)
		},
	},
})
