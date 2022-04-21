<template lang="pug">
q-page(padding)
	.container
		.row.justify-between.items-center
			.zag Отчеты
		.grid
			q-card
				q-card-section
					.row.justify-between.items-center
						.subtitle-1
							q-icon(name="mdi-star-outline").q-mr-sm
							|Избранное
						q-input(dense v-model="filter" clearable hide-bottom-space @clear="filter = ''")
							template(v-slot:prepend)
								q-icon(name="mdi-magnify")
				q-card-section
					q-chip(v-for="item in filteredReports" removable)
						.ellipsis
							|{{ item.label}}
							q-tooltip(anchor="top middle" self="bottom middle") {{ item.label}}
			q-card
				q-card-section.row.justify-between.items-center
					.subtitle-1
							q-icon(name="mdi-key").q-mr-sm
							|Ключевые слова
					q-btn(flat round icon="mdi-book-open-page-variant-outline" size="sm" @click="toggle")
				q-card-section
					q-input(outlined v-model="key" clearable autogrow)
				q-separator
				q-card-actions
					q-btn(flat) Cancel
					q-btn(flat) Cancel
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'

// import ChipCalendar from '@/components/ChipCalendar.vue'
import { starredReports } from '@/stores/data'

const filter = ref('')
const key = ref('')

const filteredReports = computed(() => {
	return starredReports.filter((item) => item.label.includes(filter.value))
})

const mystore = useStore()
const toggle = mystore.toggleRightDrawer
</script>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 1rem;
}
.q-input {
	transform: translateY(-7px);
	width: 230px;
}
.q-field--dense {
	height: 32px;
}
.q-chip {
	max-width: 200px;
}
.q-icon {
	margin-bottom: 3px;
}
</style>
