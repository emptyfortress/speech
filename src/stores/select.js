import { defineStore } from 'pinia'

export const useSelect = defineStore({
	id: 'select',
	state: () => ({
		selection: false,
	}),
	getters: {},
	actions: {
		setSelection(e) {
			this.selection = e
		},
	},
})
