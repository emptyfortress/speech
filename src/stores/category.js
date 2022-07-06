import { defineStore } from 'pinia'

export const useCategory = defineStore({
	id: 'category',
	state: () => ({
		selection: false,
		categories: [
			{ id: 0, label: 'Продажи', selected: true },
			{ id: 1, label: 'Сервис', selected: true },
			{ id: 2, label: 'Оплата', selected: true },
			{ id: 3, label: 'Жалобы', selected: false },
			{ id: 4, label: 'Неисправности', selected: false },
			{ id: 5, label: 'Услуги', selected: false },
			{ id: 6, label: 'Работа', selected: false },
			{ id: 7, label: 'Регионы', selected: false },
			{ id: 8, label: 'Грубость', selected: false },
			{ id: 9, label: 'Остальное', selected: false },
		],
	}),
	getters: {},
	actions: {
		setSelection(e) {
			this.selection = e
		},
		toggleCategory(e) {
			const index = this.categories.indexOf(e)
			this.categories[index].selected = !this.categories[index].selected
		},
	},
})
