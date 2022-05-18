<template lang="pug">
.grid
	MySelect(label="Регион" :model="regModel" :options="region")
	MySelect(label="Группа" :model="groupModel" :options="group")
	MySelect(label="Оператор" :model="operModel" :options="operator")
	MySelect(label="Период" :model="perModel" :options="period")
	div
		q-btn(flat round icon="mdi-calendar")
			q-popup-proxy( cover transition-show="scale" transition-hide="scale")
				q-date(v-model="date" range)
					.row.items-center.justify-end.q-gutter-sm
						q-btn(label="Cancel" color="primary" flat v-close-popup)
						q-btn(label="OK" color="primary" flat v-close-popup)
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MySelect from '@/components/common/MySelect.vue'

const region = ['Все', 'Не определен']
const group = ['Все', 'Не все', 'Самые-самые']
const operator = ['Все', 'Катя', 'Маша', 'Миша']
const period = ['Последние 30 дней', 'Прошлый месяц', 'Текущий месяц', 'Сегодня']

const regModel = ref('Все')
const perModel = ref('Последние 30 дней')
const groupModel = ref('Все')
const operModel = ref('Все')
const date = ref('2019/03/01')
</script>

<style scoped lang="scss">
.grid {
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 30px;
	align-items: flex-end;
	gap: 1rem;
}
</style>
