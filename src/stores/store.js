import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		rightDrawer: false,
		leftDrawer: true,
		mini: false,
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
	},
})
