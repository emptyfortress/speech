<template lang="pug">
q-page(padding)
	.container
		.row.justify-between.items-center
			.zag
				q-icon(name="mdi-trending-up" size="md").q-mr-sm
				|Тренды
			ChipCalendar1
		Trends1
		.row.justify-between.items-center.q-mt-lg
			.zag
				q-icon(name="mdi-shape-outline" size="sm").q-mr-sm
				|Категории
			ChipCalendar1(label="Текущий месяц")
		Events

		.row.justify-between.items-center.q-mt-lg
			.zag
				q-icon(name="mdi-approximately-equal" size="sm").q-mr-sm
				|Дополнительно
			ChipCalendar1(label="Прошлый месяц")
		Addition
</template>

<script setup lang="ts">
import Trends1 from '@/components/Trends1.vue'
import Events from '@/components/Events.vue'
import Addition from '@/components/Addition.vue'
import ChipCalendar1 from '@/components/ChipCalendar1.vue'
</script>

<style scoped lang="scss"></style>
