<template lang="pug">
q-page(padding)
	.container
		.row.justify-between.items-center
			.zag Отчеты
			ChipCalendar(label="Прошлый месяц")
		.grid
			q-card
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
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ChipCalendar from '@/components/ChipCalendar.vue'
import { starredReports } from '@/stores/data'

const filter = ref('')

const filteredReports = computed(() => {
	return starredReports.filter((item) => item.label.includes(filter.value))
})
</script>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 1fr 2fr;
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
</style>
