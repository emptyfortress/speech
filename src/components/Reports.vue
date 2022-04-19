<template lang="pug">
q-page(padding)
	.container
		.row.justify-between.items-center
			.zag Отчеты
			chipCalendar(label="Прошлый месяц")
		.grid
			q-card
			q-card
</template>

<script setup lang="ts">
import chipCalendar from '@/components/chipCalendar.vue'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.q-page {
	background: pink;
}
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	div {
		height: 100px;
		background: white;
	}
}
</style>
