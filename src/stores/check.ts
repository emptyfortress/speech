import { defineStore } from 'pinia'

export const useCheck = defineStore({
	id: 'check',
	state: () => ({
		allCheck: [
			{
				id: 0,
				comment:
					'<b>Веха:</b> Оператор приветствует клиента.<br /><b>Веха:</b> оператор прощается с клиентом.',
				star: true,
				selected: false,
				label: 'Приветствие и прощание',
			},
			{
				id: 1,
				comment: '<b>Веха:</b> Оператор называет свое имя и должность',
				star: true,
				selected: false,
				label: 'Представление',
			},
			{
				id: 2,
				comment:
					'<b>Веха:</b> Оператор предлагает новые услуги<br /><b>Веха:</b> Оператор предлагает выслать персональные предложения',
				star: true,
				selected: false,
				label: 'Новые услуги',
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
