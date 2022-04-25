<template lang="pug">
q-page(padding)
	.container
		.row.justify-between.items-center
			.zag Тренды
			ChipCalendar(label="Прошлая неделя")
		Trends1
		.row.justify-between.items-center.q-mt-lg
			.zag Категории
			ChipCalendar(label="Текущий месяц")
		Events

		.row.justify-between.items-center.q-mt-lg
			.zag Дополнительно
			ChipCalendar(label="Прошлый месяц")
		Addition
</template>

<script setup lang="ts">
import Trends1 from '@/components/Trends1.vue'
import Events from '@/components/Events.vue'
import Addition from '@/components/Addition.vue'
import ChipCalendar from '@/components/ChipCalendar.vue'
</script>

<style scoped lang="scss"></style>
