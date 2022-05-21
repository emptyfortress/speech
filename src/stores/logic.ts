import { defineStore } from 'pinia'

export const useLogic = defineStore({
	id: 'logic',
	state: () => ({
		allLogic: [
			{
				id: 0,
				comment: 'В начале разговора отсутствует приветствие',
				star: true,
				active: true,
				label: 'Отсутствует здравствуйте',
			},
			{
				id: 1,
				comment: 'Отсутствует благодарность за ожидание',
				star: true,
				active: false,
				label: 'Отсутствует спасибо за ожидание',
			},
			{
				id: 2,
				comment: 'В конце разговора нет прощания',
				star: true,
				active: false,
				label: 'Отсутствует до свидания',
			},
			{
				id: 3,
				comment: 'Присутствует нецензурная лексика',
				star: true,
				active: false,
				label: 'Грубость в разговоре',
			},
			{
				id: 4,
				comment: 'Паузы более 10 сек',
				star: true,
				active: false,
				label: 'Длинные паузы',
			},
			{
				id: 5,
				comment: 'Спасибо за обращение',
				star: true,
				active: false,
				label: 'Завершение разговора',
			},
			{
				id: 6,
				comment: '',
				star: true,
				active: false,
				label: 'Агрессия',
			},
			{
				id: 7,
				comment: '',
				star: true,
				active: false,
				label: 'Проверка статуса',
			},
			{
				id: 8,
				comment: '',
				star: true,
				active: false,
				label: 'Другая симка',
			},
			{
				id: 9,
				comment: '',
				star: false,
				active: false,
				label: 'Pretium vulputate sapien',
			},
			{
				id: 10,
				comment: '',
				star: false,
				active: false,
				label: 'Aenean sed adipiscing diam',
			},
			{
				id: 11,
				comment: '',
				star: false,
				active: false,
				label: 'Diam phasellus',
			},
			{
				id: 12,
				comment: '',
				star: false,
				active: false,
				label: 'Отстутствует отстутсвие',
			},
			{
				id: 13,
				comment: '',
				star: false,
				active: false,
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
		activeLogic: (state) => state.allLogic.filter((item) => item.active)[0],
	},

	actions: {
		duble() {
			const active = this.activeLogic
			const activeList = this.allList.find((e) => e.id === active.id)
			const temp = {} as Logic
			Object.assign(temp, active)
			temp.label = temp.label + ' - (копия)'
			this.allLogic.map((e) => (e.active = false))
			temp.active = true
			temp.id = active.id + 100
			this.allLogic.push(temp)
			const templist = {
				id: temp.id,
				list: activeList!.list,
			}
			this.allList.push(templist)
		},
		addLogic() {
			this.allLogic.map((e) => (e.active = false))
			const item = {} as Logic
			item.id = this.allLogic.length
			item.star = true
			item.active = true
			item.comment = 'Введите комментарий к запросу'
			item.label = 'Новый запрос'
			this.allLogic.push(item)
		},
		deleteLogic() {
			const index = this.allLogic.findIndex((item) => item.active)
			this.allLogic.splice(index, 1)
			this.allLogic[0].active = true
		},
	},
})
