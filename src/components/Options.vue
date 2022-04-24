<template lang="pug">
.grid
	div
		.label Ключевые слова

	div
		.label Тип искомых слов
		q-select(v-model="typmodel"  :options="typ" filled dense bg-color="white")

	div
		.label Положение слова в записи
		q-select(v-model="placemodel"  :options="place" filled dense bg-color="white")
	div
		.label Канал
		q-select(v-model="channelmodel"  :options="channel" filled dense bg-color="white")
</template>

<script setup></script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';

.grid {
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: grid;
	grid-template-columns: 1fr 210px 230px 130px;
	gap: 1rem;
}
.label {
	font-size: 0.8rem;
	font-weight: 600;
}
.q-item--active {
	background: red;
}
</style>
