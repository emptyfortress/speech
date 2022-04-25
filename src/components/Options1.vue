<template lang="pug">
.grid
	div
		.label Регион
		q-select(v-model="regModel"  :options="region" filled dense bg-color="white")
	div
		.label Группа
		q-select(v-model="groupModel"  :options="group" filled dense bg-color="white")
	div
		.label Оператор
		q-select(v-model="operModel"  :options="operator" filled dense bg-color="white")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const region = ['Все', 'Не определен']
const group = ['Все', 'Не все', 'Самые-самые']
const operator = ['Все', 'Катя', 'Маша', 'Миша']

const regModel = ref('Все')
const groupModel = ref('Все')
const operModel = ref('Все')
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.grid {
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
}
.label {
	font-size: 0.8rem;
	font-weight: 600;
}
</style>
