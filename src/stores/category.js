import { defineStore } from 'pinia'
import { randomNumber, randomArray, getMembers } from '@/utils/utils'

export const useCategory = defineStore({
	id: 'category',
	state: () => ({
		selection: false,
		categories: [
			{
				id: 0,
				label: 'Продажи',
				selected: true,
				call: randomNumber(30, 150, 0),
				ant: '4:43',
				loud: randomNumber(0, 3, 2),
				interrupt: randomNumber(3, 7, 2),
				spark: [{ data: randomArray(7, 30, 80) }],
				donut: randomArray(4, 20, 5),
				childs: [
					{ id: 301, label: 'fuck', typ: 0 },
					{ id: 302, label: 'fuck1', typ: 0 },
					{ id: 303, label: 'fuck2', typ: 0 },
				],
				children: [{ id: 200, label: 'Суперпродажи' }],
			},
			{
				id: 1,
				label: 'Сервис',
				selected: true,
				call: randomNumber(30, 150, 0),
				ant: '5:01',
				loud: randomNumber(0, 3, 2),
				interrupt: randomNumber(3, 7, 2),
				spark: [{ data: randomArray(7, 30, 80) }],
				donut: randomArray(4, 20, 5),
			},
			{
				id: 2,
				label: 'Оплата',
				selected: true,
				call: randomNumber(30, 150, 0),
				ant: '1:03',
				loud: randomNumber(0, 3, 2),
				interrupt: randomNumber(3, 7, 2),
				spark: [{ data: randomArray(7, 30, 80) }],
				donut: randomArray(4, 20, 5),
				children: [
					{ id: 202, label: 'Нал' },
					{ id: 203, label: 'Безнал' },
					{ id: 204, label: 'Крипта' },
				],
			},
			{
				id: 3,
				label: 'Жалобы',
				selected: false,
				call: randomNumber(30, 150, 0),
				ant: '2:15',
				loud: randomNumber(0, 3, 2),
				interrupt: randomNumber(3, 7, 2),
				spark: [{ data: randomArray(7, 30, 80) }],
				donut: randomArray(4, 20, 5),
			},
			{
				id: 4,
				label: 'Неисправности',
				selected: false,
				call: randomNumber(30, 150, 0),
				ant: '4:30',
				loud: randomNumber(0, 3, 2),
				interrupt: randomNumber(3, 7, 2),
				spark: [{ data: randomArray(7, 30, 80) }],
				donut: randomArray(4, 20, 5),
			},
			{
				id: 5,
				label: 'Услуги',
				selected: false,
				call: randomNumber(30, 150, 0),
				ant: '6:05',
				loud: randomNumber(0, 3, 2),
				interrupt: randomNumber(3, 7, 2),
				spark: [{ data: randomArray(7, 30, 80) }],
				donut: randomArray(4, 20, 5),
			},
			{
				id: 6,
				label: 'Работа',
				selected: false,
				call: randomNumber(30, 150, 0),
				ant: '6:40',
				loud: randomNumber(0, 3, 2),
				interrupt: randomNumber(3, 7, 2),
				spark: [{ data: randomArray(7, 30, 80) }],
				donut: randomArray(4, 20, 5),
			},
			{
				id: 7,
				label: 'Регионы',
				selected: false,
				call: randomNumber(30, 150, 0),
				ant: '2:32',
				loud: randomNumber(0, 3, 2),
				interrupt: randomNumber(3, 7, 2),
				spark: [{ data: randomArray(7, 30, 80) }],
				donut: randomArray(4, 20, 5),
			},
			{
				id: 8,
				label: 'Грубость',
				selected: false,
				call: randomNumber(30, 150, 0),
				ant: '2:16',
				loud: randomNumber(0, 3, 2),
				interrupt: randomNumber(3, 7, 2),
				spark: [{ data: randomArray(7, 30, 80) }],
				donut: randomArray(4, 20, 5),
			},
			{
				id: 9,
				label: 'Остальное',
				selected: false,
				call: randomNumber(30, 150, 0),
				ant: '5:36',
				loud: randomNumber(0, 3, 2),
				interrupt: randomNumber(3, 7, 2),
				spark: [{ data: randomArray(7, 30, 80) }],
				donut: randomArray(4, 20, 5),
			},
		],
	}),
	getters: {
		rowNum() {
			return this.categories.filter((e) => e.selected).length
		},
		catList() {
			return getMembers(this.categories)
		},
	},
	actions: {
		setSelection(e) {
			this.selection = e
		},
		toggleCategory(e) {
			const index = this.categories.indexOf(e)
			this.categories[index].selected = !this.categories[index].selected
		},
		setAll() {
			this.categories.map((e) => {
				return (e.selected = true)
			})
		},
		unsetAll() {
			this.categories.map((e) => {
				return (e.selected = false)
			})
		},
	},
})