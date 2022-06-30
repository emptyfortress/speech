import { defineStore } from 'pinia'

export const useCheck = defineStore({
	id: 'check',
	state: () => ({
		allCheck: [
			{
				id: 0,
				comment: 'Оператор здоровается и прощается с клиентом',
				star: true,
				selected: true,
				label: 'Приветствие и прощание',
			},
			{
				id: 1,
				comment: 'Оператор не употребляет бранные слова',
				star: true,
				selected: false,
				label: 'Вежливое общение',
			},
			{
				id: 2,
				comment: 'Оператор предлагает новые услуги.',
				star: true,
				selected: false,
				label: 'Новые услуги',
			},
			{
				id: 3,
				comment: 'Описание чеклиста',
				star: false,
				selected: false,
				label: 'Чеклист 1',
			},
			{
				id: 4,
				comment: 'Описание чеклиста',
				star: false,
				selected: false,
				label: 'Чеклист 2',
			},
		],
		allList: [
			{
				id: 0,
				list: [
					{ id: 0, condition: 'and', mod1: 'Отсутствует', mod2: 'здравствуйте' },
					{ id: 1, condition: 'and', mod1: 'Отсутствует', mod2: 'добрый вечер' },
				],
			},
		],
	}),
	getters: {
		activeCheck: (state) => state.allCheck.filter((item) => item.selected)[0],
	},

	actions: {},
})
