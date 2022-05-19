import { defineStore } from 'pinia'

export const useLogic = defineStore({
	id: 'logic',
	state: () => ({
		allLogic: [
			{
				id: 0,
				comment: 'В начале разговора отстутствует приветствие',
				star: true,
				active: true,
				label: 'Отстутствует здравствуйте',
			},
			{
				id: 1,
				comment: 'Отсутствует благодарность за ожидание',
				star: true,
				active: false,
				label: 'Отсутствует спасибо за ожидание',
				list: [{ id: 0, and: true, mod1: '', mod2: '', mod3: '' }],
			},
			{
				id: 2,
				comment: 'В конце разговора нет прощания',
				star: true,
				active: false,
				label: 'Отстутствует до свидания',
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
	}),
	getters: {
		activeLogic: (state) => state.allLogic.filter((item) => item.active)[0],
	},

	actions: {
		duble() {
			const active = this.activeLogic
			const temp = {}
			Object.assign(temp, active)
			temp.label = temp.label + ' - (копия)'
			this.allLogic.map((e) => (e.active = false))
			temp.active = true
			temp.id = this.allLogic.length
			this.allLogic.push(temp)
		},
		addLogic() {
			this.allLogic.map((e) => (e.active = false))
			const item = {}
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
