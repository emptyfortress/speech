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
						q-input(dense v-model="filter" clearable hide-bottom-space)
							template(v-slot:prepend)
								q-icon(name="mdi-magnify" @click="test")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChipCalendar from '@/components/ChipCalendar.vue'

const filter = ref('')

const test = () => {
	console.log(1)
}
</script>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 1rem;
}
.q-input {
	transform: translateY(-7px);
	width: 250px;
}
.q-field--dense {
	height: 32px;
}
</style>
