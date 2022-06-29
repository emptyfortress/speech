<template lang="pug">
q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei")
	template(v-slot:before)
		q-card.card
			q-card-section.q-px-none
				.row.items-center.justify-between
					q-btn(flat round dense)
						q-icon(name="mdi-backburger")
					#zg(contenteditable @blur="update") Заголовок
					.btngroup
						q-btn(outline size="10px" color="primary" @click="mystore.duble").q-mr-xs Дублировать
						q-btn(round flat icon="mdi-plus" dense color="primary" @click="mystore.addLogic")
			component(:is="draggable" class="list-group" :list="list1" group="vehi" itemKey="id" )
				template(#item="{ element }")
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
						component(:is="draggable" v-model="alllogic" group="vehi" itemKey="id")
							template(#item="{ element }")
								q-item(tag="label" v-ripple dense)
									q-item-section(side v-if="element.star")
										q-icon(dense name="mdi-star" size="10px")
									q-item-section
										q-item-label
											WordHighlighter(:query="query") {{ element.label }}

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

const clearFilter = () => {
	query.value = ''
}
const list1 = ref([])

const alllogic = computed({
	get: () => {
		if (query.value) {
			return mystore.allLogic.filter((e) =>
				e.label.toLowerCase().includes(query.value.toLowerCase())
			)
		} else return mystore.allLogic
	},
	set: (val) => mystore.updateLogicList(val),
})

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
	background: #fff;
	padding: 1rem;
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
.card {
	margin-right: 0.5rem;
	margin-top: 1rem;
	min-height: 200px;
	// padding: 1rem;
	padding-top: 0;
}
.list-group {
	width: 100%;
	min-height: 200px;
	background: pink;
}
#zg {
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 600;
	padding: 0.5rem;
	padding-bottom: 0;
	&:hover {
		background: $bgLight;
	}
	&:focus {
		outline: none;
		border-bottom: 1px dotted $primary;
		background: $bgSelection;
	}
}
</style>
