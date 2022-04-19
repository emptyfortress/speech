<template lang="pug">
q-page(padding)
	.container
		.row.justify-between.items-center
			.zag Тренды
			chipCalendar
		Trends1
		.row.justify-between.items-center.q-mt-lg
			.zag Категории
			chipCalendar(label="Текущий месяц")
		Events

		.row.justify-between.items-center.q-mt-lg
			.zag Дополнительно
			chipCalendar(label="Прошлый месяц")
		Addition
</template>

<script setup lang="ts">
import Trends1 from '@/components/Trends1.vue'
import Events from '@/components/Events.vue'
import Addition from '@/components/Addition.vue'
import chipCalendar from '@/components/chipCalendar.vue'
</script>

<style scoped lang="scss"></style>
