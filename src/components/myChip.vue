<template lang="pug">
q-chip(:label="date" color="blue-grey-2").cursor-pointer
	q-menu(transition-show="jump-down" transition-hide="jump-up")
		q-list
			q-item(clickable v-close-popup v-for="item in list" @click="setDateOptions(item)")
				q-item-section {{ item }}
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const list = [
	'Прошлая неделя',
	'Текущая неделя',
	'Прошлый месяц',
	'Текущий месяц',
	'Прошлый квартал',
	'Текущий квартал',
]

const date = ref('Прошлая неделя')

const setDateOptions = (e: string) => {
	date.value = e
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
