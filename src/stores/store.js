import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		rightDrawer: true,
		leftDrawer: true,
		mini: true,
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
