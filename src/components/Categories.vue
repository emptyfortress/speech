<template lang="pug">
q-page(padding)
	.container
		q-item
			q-item-section(avatar).line
				q-avatar(icon="mdi-lan" flat)
			q-item-section
				.zag Категории
		q-card-section
			q-splitter(v-model="split1" :limits="[20, 50]" :style="hei").spli
				template(v-slot:before)
					.tree
						q-input(dense debounce="0" color="primary" autofocus v-model="filter" clearable)
							template(v-slot:prepend)
								q-icon(name="mdi-magnify")

						q-scroll-area(:style="hei1")
							q-tree(:nodes="cat.cat"
								node-key="id"
								no-results-label="Ничего нет"
								selected-color="primary"
								no-selection-unset
								v-model:selected="selected"
								v-model:expanded="expanded"
								:filter="filter").cat
								template(v-slot:default-header="prop")
									.nod
										WordHighlighter(:query="filter") {{prop.node.label}}
										q-popup-edit(v-model="prop.node.label" auto-save v-slot="scope" v-if="editMode" :ref="(el: any) => {node[prop.node.id] = el}" @hide="editMode = false")
											q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")

										q-menu(context-menu auto-close)
											q-list.ctx
												q-item(clickable v-close-popup v-for="item in menu" :key="item.id" @click="item.action && item.action(prop.node)" :class="calc(item, prop.node)" )
													q-item-section(avatar)
														q-icon(:name="item.icon")
													q-item-section {{ item.label }}

				template(v-slot:after)
					component(:is="Subcategories" :selectedItem="selectedItem" @select="select")
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUpdate, nextTick } from 'vue'
import { uid } from 'quasar'
import { useCat } from '@/stores/category1'
import { getNodeFromTree } from '@/utils/utils'
import Subcategories from '@/components/Subcategories.vue'
import { useQuasar } from 'quasar'
import type { Ref } from 'vue'
import WordHighlighter from 'vue-word-highlighter'

const cat = useCat()
const $q = useQuasar()

const split1 = ref(20)
const selected = ref(cat.cat[0].id)

const selectedItem = computed(() => {
	let node = cat.cat[0]
	return getNodeFromTree(node, selected.value)
})

const select = (e: string) => {
	selected.value = e
}

const filter = ref('')

const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 190) + 'px;'
})

const hei1 = computed(() => {
	return 'height: ' + (window.innerHeight - 240) + 'px;'
})

const expanded: Ref<string[]> = ref(['0', '1', '3'])

const add = (e: Category) => {
	if (e.level === 2) {
		return
	}
	let temp = {
		id: uid(),
		label: 'Название',
		level: e.level + 1,
		breads: [...e.breads, e.label],
		children: [],
		childs: [],
	}
	cat.addCategory(temp, e.id)
	selected.value = temp.id
	expanded.value.push(e.id)
}

const show = (e: Category) => {
	let message = e.label + ' - удалено.'
	$q.notify({
		message: message,
		color: 'negative',
		actions: [
			{
				label: 'Вернуть',
				color: 'white',
				// handler: () => undo(e),
			},
		],
	})
}

const killNode = (e: Category) => {
	cat.killNode(e.id)
	selected.value = cat.cat[0].id
	show(e)
}

const editMode = ref(false)

const node: Ref<any[]> = ref([])

const editNode = async (e: Category) => {
	editMode.value = true
	await nextTick(() => {
		node.value[e.id as any].show()
	})
}

onBeforeUpdate(() => {
	node.value = []
})

interface Menu {
	id: number
	label: string
	icon: string
	action?: Function
}
const calc = (item: Menu, e: Category) => {
	if (e.level === 2 && item.id === 0) {
		return 'disab'
	}
	if (item.id === 3) {
		return 'top'
	}
}

const menu = [
	{
		id: 0,
		label: 'Добавить',
		icon: 'mdi-plus-circle-outline',
		action: add,
	},
	{ id: 4, label: 'Переименовать', action: editNode, icon: 'mdi-pencil' },
	{ id: 1, label: 'Копировать', icon: 'mdi-content-copy' },
	{ id: 2, label: 'Вставить', icon: 'mdi-content-paste' },
	{ id: 3, label: 'Удалить', action: killNode, icon: 'mdi-trash-can-outline' },
]

// const newcat = ref('')
</script>

<style scoped lang="scss">
.tree {
	margin-right: 1rem;
}
.ccc {
	position: absolute;
	bottom: 0.5rem;
	left: 0;
	background: $primary;
	color: white;
	width: 200px;
	z-index: 10;
	border-bottom-left-radius: 1.5rem;
	padding: 1rem;
}
.fab1 {
	position: absolute;
	bottom: 0.5rem;
	left: 0;
	z-index: 10;
}
.row {
	width: 100%;
}
.q-tree__node--selected .del {
	visibility: visible;
}
.ctx {
	min-width: 200px;
}
.nod {
	width: 100%;
}
.top {
	border-top: 1px solid #cdcdcd;
	color: darkred;
}
.disab {
	opacity: 0.5;
	&.cursor-pointer {
		cursor: not-allowed !important;
	}
}
</style>
