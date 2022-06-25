<template lang="pug">
.zg
	q-badge {{ items.length }}
	div Библиотека
q-input(ref="input" dense v-model="filter" autofocus clearable hide-bottom-space @clear="filter = ''")
	template(v-slot:prepend)
		q-icon(name="mdi-magnify")
//- q-icon(name="mdi-plus-circle" size="md" color="primary" v-show="filter.length > 2" ).plus

//- p {{ selection}}
q-list(dense)
	q-item(v-for="item in vocabularies" clickable :key="item.name")
		q-item-section(side)
			component(:is="SvgIcon" name="vocabulary").voc
		q-item-section
			q-checkbox(v-model="selection" size="xs" dense :val="item.keys" :label="item.name")
		q-item-section(side)
			.row
				q-icon(name="mdi-pencil" size="xs" @click="removeVoc(item)").q-mr-sm
				q-icon(name="mdi-trash-can-outline" size="xs" @click="removeVoc(item)")
	q-item(v-for="item in filteredItems" clickable :key="item.key")
		q-item-section
			q-checkbox(v-model="selection" size="xs" dense :val="item.key" :label="item.key")
		q-item-section(side)
			q-icon(name="mdi-trash-can-outline" size="xs" @click="remove(item)")
	template(v-if="filteredItems.length === 0")
		.notfound
			q-icon(name="mdi-emoticon-tongue-outline" size="sm" color="primary")
			span.q-mx-sm Ничего нет.
			q-btn(color="primary" label="Добавить" size="sm" unelevated @click="add")

transition(name="slide-bottom")
	.addvoc(v-show="selection.length > 0")
		.total
			|Выбрано:
			span {{ calcKeys }}
			q-btn(round dense flat icon="mdi-close" size="sm" @click="cancel")
		q-input(v-model="vocName" outlined dense label="Название словаря" bg-color="white")
		q-card-actions
			q-btn(label="Отмена" flat color="white" @click="cancel")
			q-space
			q-btn(label="Создать" flat color="white" :disable="vocName.length < 3" @click="addVoc")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { words, vocabs } from '@/stores/list'
import SvgIcon from '@/components/SvgIcon.vue'

interface Keyword {
	key: string
	selected: boolean
	value: number
	part: string
	voc?: boolean
}
interface Voc {
	name: string
	selected: boolean
	keys: string[]
}

const selection = ref([])
const input = ref(null)
const filter = ref('')

const vocabularies = ref(vocabs)
const items = ref(words)
const filteredItems = computed(() => {
	if (filter.value) {
		return items.value.filter((item) => item.key.includes(filter.value))
	}
	return items.value
})

const remove = (e: Keyword) => {
	let index = items.value.findIndex((item) => item.key === e.key)
	items.value.splice(index, 1)
	show(e)
}
const removeVoc = (e: Voc) => {
	let index = vocabularies.value.findIndex((item: Voc) => item.name === e.name)
	vocabularies.value.splice(index, 1)
	// show(e)
}
const compare = (a: Keyword, b: Keyword) => {
	if (a.value > b.value) return -1
	if (a.value < b.value) return 1
	return 0
}

const add = () => {
	if (filter.value) {
		let temp = {
			key: filter.value,
			selected: false,
			value: 4500,
			part: '',
		}
		items.value.push(temp)
		items.value.sort(compare)
		added(filter.value)
		filter.value = ''
	}
}

const undo = (e: Keyword) => {
	items.value.push(e)
	items.value.sort(compare)
}

const $q = useQuasar()
const show = (e: Keyword) => {
	let message = e.key + ' - удалено.'
	$q.notify({
		message: message,
		color: 'negative',
		actions: [
			{
				label: 'Вернуть',
				color: 'white',
				handler: () => undo(e),
			},
		],
	})
}

const added = (e: string) => {
	let message = 'Добавлено ' + e
	$q.notify({
		message: message,
		icon: 'mdi-check',
		position: 'bottom-right',
	})
}
const vocName = ref('')

const cancel = () => {
	selection.value = []
}

const addVoc = () => {
	let temp: Voc = {
		name: vocName.value,
		selected: false,
		keys: selection.value,
	}
	vocabularies.value.push(temp)
	selection.value = []
	added(vocName.value)
	vocName.value = ''
}
const calcKeys = computed(() => {
	return selection.value.flat(2).length
})

// const calcVal = (item) => {
// 	return [...item.keys]
// }
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
.notfound {
	margin-top: 1rem;
	font-size: 0.9rem;
	// text-align: center;
}
.voc {
	font-size: 0.8rem;
	transform: translateY(2px);
}
.addvoc {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background: $primary;
	padding: 0.5rem;
	color: white;
}
.total {
	margin-bottom: 0.5rem;
	span {
		margin: 0 1rem;
		font-size: 1.2rem;
	}
	.q-btn {
		transform: translateY(-2px);
	}
}
</style>
