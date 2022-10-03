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
								label: 'Госсектор',
								breads: ['Тема', 'Продажи'],
								level: 2,
								call: 50,
								ant: 4.0,
								loud: 11.5,
								interrupt: 9,
								childs: [],
								children: [],
							},
							{
								id: '101',
								label: 'Корпоративные',
								breads: ['Тема', 'Продажи'],
								level: 2,
								call: 57,
								ant: 3.15,
								loud: 8,
								interrupt: 6,
								childs: [],
								children: [],
							},
							{
								id: '102',
								label: 'Малый бизнес',
								level: 2,
								breads: ['Тема', 'Продажи'],
								call: 63,
								ant: 5.35,
								loud: 6.8,
								interrupt: 11,
								childs: [],
								children: [],
							},
							{
								id: '103',
								label: 'Население',
								level: 2,
								breads: ['Тема', 'Продажи'],
								call: 40,
								ant: 2.25,
								loud: 4.6,
								interrupt: 5,
								childs: [],
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
						children: [
							{
								id: '201',
								breads: ['Тема', 'Сервис'],
								label: 'Гарантийное обслуживание',
								level: 2,
								call: 50,
								ant: 4.0,
								loud: 11.5,
								interrupt: 9,
								childs: [],
							},
							{
								id: '202',
								breads: ['Тема', 'Сервис'],
								label: 'Предпродажная подготовка',
								level: 2,
								call: 57,
								ant: 3.15,
								loud: 8,
								interrupt: 6,
								childs: [],
							},
							{ id: '203', breads: ['Тема', 'Сервис'], label: 'Тюнинг', level: 2, childs: [] },
							{ id: '204', breads: ['Тема', 'Сервис'], label: 'Страховка', level: 2, childs: [] },
						],
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
								call: 63,
								ant: 5.35,
								loud: 6.8,
								interrupt: 11,
								childs: [],
								children: [],
							},
							{
								id: '203',
								label: 'Безнал',
								level: 2,
								breads: ['Тема', 'Оплата'],
								call: 57,
								ant: 3.15,
								loud: 8,
								interrupt: 6,
								childs: [],
								children: [],
							},
							{
								id: '204',
								label: 'Крипто',
								level: 2,
								breads: ['Тема', 'Оплата'],
								call: 40,
								ant: 2.25,
								loud: 4.6,
								interrupt: 5,
								childs: [],
								children: [],
							},
						],
					},
					{
						id: '8',
						label: 'Регионы',
						level: 1,
						breads: ['Тема'],
						childs: [],
						children: [
							{
								id: '81',
								label: 'Центр',
								level: 2,
								breads: ['Тема', 'Регионы'],
								childs: [],
								call: 40,
								ant: 3.1,
								loud: 15.5,
								interrupt: 12,
							},
							{
								id: '82',
								label: 'Северо-Запад',
								level: 2,
								breads: ['Тема', 'Регионы'],
								call: 50,
								ant: 4.0,
								loud: 11.5,
								interrupt: 9,
								childs: [],
							},

							{
								id: '83',
								label: 'Юг',
								level: 2,
								breads: ['Тема', 'Регионы'],
								childs: [],
								call: 57,
								ant: 3.15,
								loud: 8,
								interrupt: 6,
							},

							{
								id: '84',
								label: 'Урал',
								level: 2,
								breads: ['Тема', 'Регионы'],
								childs: [],
								call: 63,
								ant: 5.35,
								loud: 6.8,
								interrupt: 11,
							},
							{
								id: '85',
								label: 'Сибирь',
								level: 2,
								breads: ['Тема', 'Регионы'],
								childs: [],
								call: 21,
								ant: 7.8,
								loud: 1.9,
								interrupt: 6,
							},
							{
								id: '86',
								label: 'Дальний восток',
								level: 2,
								call: 61,
								ant: 7.15,
								loud: 2.9,
								interrupt: 8,
								breads: ['Тема', 'Регионы'],
								childs: [],
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
		catselect: 'Продажи',
	}),
	getters: {
		rowNum() {
			return this.getSubCat.length
		},
		getSubCat() {
			let item = this.cat[0].children.filter((e) => e.label === this.catselect)
			return item[0].children.map((a) => a.label)
		},
	},
	actions: {
		killNode(id) {
			deleteNodeFromTree(this.cat[0], id)
		},
		addCategory(newItem, id) {
			insertNodeIntoTree(this.cat[0], id, newItem)
		},
		setCatselect(payload) {
			this.catselect = payload
		},
	},
})
