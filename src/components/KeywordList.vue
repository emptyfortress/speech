<template lang="pug">
.zg
	q-badge {{ items.length }}
	div Библиотека
.rel
	q-input(ref="input" dense v-model="filter" autofocus clearable hide-bottom-space @clear="filter = ''")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")
	q-icon(name="mdi-plus-circle" size="md" color="primary" v-show="filter.length > 2" @click="add").plus

q-list(dense)
	q-item(v-for="item in filteredItems" clickable :key="item.key")
		q-item-section
			q-checkbox(v-model="selection" size="xs" dense :val="item.key" :label="item.key")
		q-item-section(side)
			q-icon(name="mdi-trash-can-outline" size="xs" @click="remove(item)")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { words } from '@/stores/list'

interface keyword {
	key: string
	selected: boolean
	value: number
	part: string
}

const selection = ref([])
const input = ref(null)
const filter = ref('')

const items = ref(words)
const filteredItems = computed(() => {
	if (filter.value) {
		return items.value.filter((item) => item.key.includes(filter.value))
	}
	return items.value
})

const remove = (e: keyword) => {
	let index = items.value.findIndex((item) => item.key === e.key)
	items.value.splice(index, 1)
	show(e)
}
const compare = (a: keyword, b: keyword) => {
	if (a.value > b.value) return -1
	if (a.value < b.value) return 1
	return 0
}

const add = () => {
	if (filter.value) {
		let temp = {
			key: filter.value,
			selected: false,
			value: 4000,
			part: '',
		}
		items.value.push(temp)
		items.value.sort(compare)
	}
}

const undo = (e: keyword) => {
	items.value.push(e)
	items.value.sort(compare)
}

const $q = useQuasar()
const show = (e: keyword) => {
	let message = e.key + ' - удалено.'
	$q.notify({
		message: message,
		actions: [
			{
				label: 'Вернуть',
				color: 'white',
				handler: () => undo(e),
			},
		],
	})
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.rel {
	position: relative;
	.plus {
		position: absolute;
		top: -3px;
		right: 23px;
	}
}
.q-list--dense {
	font-size: 0.9rem;
	.q-item {
		padding-left: 6px;
		padding-right: 6px;
	}
}
.q-input {
	transform: translateY(-7px);
}
.q-field--dense {
	height: 32px;
}
.q-item {
	.q-icon {
		display: none;
	}
	&:hover {
		.q-icon {
			display: block;
		}
	}
}
.q-notification-message {
	background: red;
}
.zg {
	margin-bottom: 1rem;
	font-size: 0.9rem;
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
}
</style>