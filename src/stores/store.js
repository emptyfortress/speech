import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		rightDrawer: false,
		leftDrawer: true,
		dateDrawer: false,
		keyDrawer: false,
		mini: false,
		keys: [],
		chips: [],
		sett: true,
	}),
	getters: {},

	actions: {
		toggleSetup() {
			this.sett = !this.sett
			console.log(444)
		},
		toggleDateDrawer() {
			this.mini = true
			this.dateDrawer = !this.dateDrawer
		},
		toggleKeyDrawer() {
			this.mini = true
			this.keyDrawer = !this.keyDrawer
		},
		toggleLeftDrawer() {
			this.leftDrawer = !this.leftDrawer
		},
		closeLeftDrawer() {
			this.leftDrawer = false
			console.log('fuck')
		},
		toggleMini() {
			this.mini = !this.mini
		},
		closeMenu() {
			this.mini = true
		},
		addKey(e) {
			this.keys.push(e)
		},
		removeKey(e) {
			let index = this.keys.findIndex((item) => item === e)
			this.keys.splice(index, 1)
		},
		removeKeyByIndex(e) {
			this.keys.splice(e, 1)
		},
		setChips(e) {
			this.chips = e
		},
		setKeys(e) {
			this.keys = e
		},
		clearSelected() {
			this.chips.map((item) => (item.selected = false))
		},
	},
})
