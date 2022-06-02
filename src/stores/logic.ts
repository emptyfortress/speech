import { defineStore } from 'pinia'

export const useLogic = defineStore({
	id: 'logic',
	state: () => ({
		allLogic: [
			{
				id: 0,
				comment: 'В начале разговора отсутствует приветствие',
				star: true,
				selected: true,
				label: 'Отсутствует здравствуйте',
			},
			{
				id: 1,
				comment: 'Отсутствует благодарность за ожидание',
				star: true,
				selected: false,
				label: 'Отсутствует спасибо за ожидание',
			},
			{
				id: 2,
				comment: 'В конце разговора нет прощания',
				star: true,
				selected: false,
				label: 'Отсутствует до свидания',
			},
			{
				id: 3,
				comment: 'Присутствует нецензурная лексика',
				star: true,
				selected: false,
				label: 'Грубость в разговоре',
			},
			{
				id: 4,
				comment: 'Паузы более 10 сек',
				star: true,
				selected: false,
				label: 'Длинные паузы',
			},
			{
				id: 5,
				comment: 'Спасибо за обращение',
				star: true,
				selected: false,
				label: 'Завершение разговора',
			},
			{
				id: 6,
				comment: '',
				star: true,
				selected: false,
				label: 'Агрессия',
			},
			{
				id: 7,
				comment: '',
				star: true,
				selected: false,
				label: 'Проверка статуса',
			},
			{
				id: 8,
				comment: '',
				star: true,
				selected: false,
				label: 'Другая симка',
			},
			{
				id: 9,
				comment: '',
				star: false,
				selected: false,
				label: 'Pretium vulputate sapien',
			},
			{
				id: 10,
				comment: '',
				star: false,
				selected: false,
				label: 'Aenean sed adipiscing diam',
			},
			{
				id: 11,
				comment: '',
				star: false,
				selected: false,
				label: 'Diam phasellus',
			},
			{
				id: 12,
				comment: '',
				star: false,
				selected: false,
				label: 'Отстутствует отстутсвие',
			},
			{
				id: 13,
				comment: '',
				star: false,
				selected: false,
				label: 'Arcu dictum varius',
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
			{ id: 1, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 2, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 3, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 4, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 5, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 6, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 7, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 8, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 9, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 10, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 11, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 12, list: [{ id: 0, condition: 'and', mod1: '' }] },
			{ id: 13, list: [{ id: 0, condition: 'and', mod1: '' }] },
		],
	}),
	getters: {
		activeLogic: (state) => state.allLogic.filter((item) => item.selected)[0],
	},

	actions: {
		duble() {
			const active = this.activeLogic
			const activeList = this.allList.find((e) => e.id === active.id)
			const temp = {} as Logic
			Object.assign(temp, active)
			temp.label = temp.label + ' - (копия)'
			this.allLogic.map((e) => (e.selected = false))
			temp.selected = true
			temp.id = active.id + 100
			this.allLogic.push(temp)
			const templist = {
				id: temp.id,
				list: activeList!.list,
			}
			this.allList.push(templist)
		},
		addLogic() {
			this.allLogic.map((e) => (e.selected = false))
			const item = {} as Logic
			item.id = this.allLogic.length
			item.star = true
			item.selected = true
			item.comment = 'Введите комментарий к запросу'
			item.label = 'Новый запрос'
			item.list = [{ id: 0, condition: 'and', mod1: 'Отсутствует', mod2: 'здравствуйте' }]
			this.allLogic.push(item)
		},
		deleteLogic() {
			const index = this.allLogic.findIndex((item) => item.selected)
			this.allLogic.splice(index, 1)
			this.allLogic[0].selected = true
		},
	},
})
