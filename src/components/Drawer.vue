<template lang="pug">
q-drawer(:model-value="show" side="left" :mini="mini" :width="200" @update:model-value="$emit('toggle')")
	q-list.q-mt-lg
		q-item(clickable v-app-ripple v-for="page in pages" :to="page.url")
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section()
				q-item-label {{ page.title }}

	q-btn(round flat dense  @click="mini = !mini").mini.gt-sm
		q-icon(name="mdi-backburger" v-if="!mini")
		q-icon(name="mdi-forwardburger" v-else)

</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	show: {
		type: Boolean,
		default: true,
	},
})
const emit = defineEmits(['toggle'])

const pages = [
	{
		id: 0,
		title: 'Главная',
		icon: 'mdi-home-roof',
		url: '/',
	},
	{
		id: 1,
		title: 'Отчеты',
		icon: 'mdi-finance',
		url: '/test',
	},
	{
		id: 2,
		title: 'Сравнение',
		icon: 'mdi-scale-balance',
		url: '',
	},
	{
		id: 4,
		title: 'Чек-листы',
		icon: 'mdi-check-all',
		url: '',
	},
	{
		id: 5,
		title: 'Диалоги',
		icon: 'mdi-forum',
		url: '',
	},
	{
		id: 6,
		title: 'Запросы',
		icon: 'mdi-toy-brick-search-outline',
		url: '',
	},
]
// export default {

const mini = ref(false)
const icon = ref('mdi-backburger')

const toggle = () => {
	emit('toggle')
}
</script>

<style scoped lang="scss">
// @import '@/assets/styles/theme.scss';
.mini {
	position: absolute;
	bottom: 1rem;
	left: 0.5rem;
	overflow-x: hidden;
}
.q-item--active,
.q-item.q-router-link--active {
	background: pink;
	color: black;
}
</style>
