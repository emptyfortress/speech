<template lang="pug">
q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei")
	template(v-slot:before)
		q-card(style="height: 600px;").card
			component(:is="draggable" class="list-group" :list="list1" group="vehi" itemKey="name" )
				template(#item="{ element, index }")
					div(class="list-group-item") {{ element.label }}

	template(v-slot:after)
		q-scroll-area.list
			q-form.quick
				q-card-section.q-pt-xs
					q-input(dense
						v-model="query"
						clearable
						@clear="clearFilter"
						placeholder="фильтр"
						).query
						template(v-slot:prepend)
							q-icon(name="mdi-magnify")
				q-expansion-item(v-model="firstItem" header-class="text-bold")
					template(v-slot:header)
						q-item-section Логические запросы
						q-item-section(side) ({{mystore.allLogic.length}})
					q-list(dense).q-mb-lg
						q-item(v-for="item in alllogic" :key="item.id" tag="label" v-ripple)
							q-item-section(side v-if="item.star")
								q-icon(dense name="mdi-star" size="10px")
							q-item-section
								q-item-label
									WordHighlighter(:query="query") {{ item.label }}
			//- .zg
			//- 	q-icon(name="mdi-toy-brick-search-outline")
			//- 	|Логические запросы
			//- component(:is="draggable" class="list-group" :list="mystore.allLogic" group="vehi" itemKey="name" )
			//- 	template(#item="{ element }")
			//- 		div(class="list-group-item") {{ element.label }}
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref, computed, reactive } from 'vue'
import { useLogic } from '@/stores/logic'
import WordHighlighter from 'vue-word-highlighter'

const splitterModel = ref(65)
const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 105) + 'px;'
})
const firstItem = ref(true)

const mystore = useLogic()
const query = ref('')
const alllogic = computed(() => {
	return mystore.allLogic.filter((item) => {
		if (query.value) {
			return item.label.toLowerCase().includes(query.value.toLowerCase())
		}
		return mystore.allLogic
	})
})

const list1 = reactive([
	// { name: 'John', id: 1 },
	// { name: 'Joao', id: 2 },
	// { name: 'Jean', id: 3 },
	// { name: 'Gerard', id: 4 },
])

const list2 = reactive([
	{ name: 'Juan', id: 5 },
	{ name: 'Edgard', id: 6 },
	{ name: 'Johnson', id: 7 },
])

// import { useQuasar } from 'quasar'
// import Puzzle from '@/components/Puzzle.vue'

// const props = defineProps({
// 	splitter: Number,
// })
// const emit = defineEmits(['maximize', 'reset'])

// const switchSidebar = () => {
// 	if (props.splitter !== 0) {
// 		emit('maximize')
// 	} else emit('reset')
// }
// const dialog = ref(false)
// const update = () => {
// 	const zag = document.getElementById('zg')
// 	const text = zag!.innerHTML
// 	const index = mystore.allLogic.findIndex((item) => item.selected)
// 	mystore.allLogic[index].label = text
// }
// const updatecomment = () => {
// 	const comm = document.getElementById('comment')
// 	const text = comm!.innerHTML
// 	const index = mystore.allLogic.findIndex((item) => item.selected)
// 	mystore.allLogic[index].comment = text
// }

// const $q = useQuasar()
// const save = () => {
// 	$q.notify({
// 		icon: undefined,
// 		message: 'Запрос сохранен',
// 		color: 'positive',
// 		position: 'top-right',
// 	})
// }
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
.card {
	margin-top: 1rem;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
}
.quick .q-field--dense .q-field__control,
.q-field--dense .q-field__marginal {
	height: 28px !important;
}
.query {
	font-size: 1rem;
	flex-grow: 1;
}
.list {
	padding: 0.5rem;
	margin-right: 0.5rem;
	height: calc(100vh - 105px);
	font-size: 0.9rem;
}
</style>
