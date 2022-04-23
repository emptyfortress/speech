import { defineStore } from 'pinia'
import { starredReports } from '@/stores/data'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		rightDrawer: false,
		leftDrawer: true,
		mini: false,
		keys: [],
		chips: starredReports,
	}),
	getters: {},

	actions: {
		toggleRightDrawer() {
			this.rightDrawer = !this.rightDrawer
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
		setKeys(e) {
			this.keys = e
		},
		clearSelected() {
			this.chips.map((item) => (item.selected = false))
		},
	},
})
