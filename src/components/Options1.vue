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
	div
		.label Период
		q-select(v-model="perModel"  :options="period" filled dense bg-color="white")
	div
		q-btn(flat round icon="mdi-calendar")
			q-popup-proxy( cover transition-show="scale" transition-hide="scale")
				q-date(v-model="date" range)
					.row.items-center.justify-end.q-gutter-sm
						q-btn(label="Cancel" color="primary" flat v-close-popup)
						q-btn(label="OK" color="primary" flat v-close-popup)
	.bt
		q-btn(color="primary" icon="mdi-star"  label="Сохранить" @click="dialog = !dialog")
		q-btn(color="primary" icon="mdi-check-bold" label="Применить" @click="toggle")

q-dialog(v-model="dialog" persistent)
	q-card.save
		q-card-section(class="row items-center q-pb-none")
			div(class="text-h6") Сохранить отчет
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)
		q-card-section
			q-input(label="Имя" v-model="name" autofocus)
		q-card-actions(align="right")
			q-btn(flat label="Отмена" color="primary" v-close-popup)
			q-btn(flat label="Сохранить" color="primary" v-close-popup)

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const mystore = useStore()
const toggle = () => {
	mystore.sett = false
}
const dialog = ref(false)
const name = ref('')

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
//@import '@/assets/css/colors.scss';
.grid {
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 30px;
	align-items: flex-end;
	gap: 1rem;
}
.bt {
	// border-top: 1px solid $primary;
	grid-column: 1 / -1;
	justify-self: center;
	display: flex;
	gap: 0.5rem;
}
.label {
	font-size: 0.8rem;
	font-weight: 600;
}
.save {
	min-width: 300px;
}
</style>
