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
							q-tree(:nodes="cat.categories"
								node-key="label"
								selected-color="primary"
								v-model:selected="selected"
								v-model:expanded="expanded"
								:filter="filter").cat
								template(v-slot:default-header="prop")
									.nod {{prop.node.label}}
										q-menu(context-menu auto-close)
											q-list.ctx
												q-item(clickable v-close-popup v-for="item in menu" :key="item.id" @click="item.action && item.action(prop.node)")
													q-item-section(avatar)
														q-icon(:name="item.icon")
													q-item-section {{ item.label }}

				template(v-slot:after)
					component(:is="Subcategories" :selected="selected")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { uid } from 'quasar'
import { useCat } from '@/stores/category1'

// import { useCategory } from '@/stores/category'
import Subcategories from '@/components/Subcategories.vue'

const cat = useCat()

const split1 = ref(20)
const selected = ref(cat.categories[0].label)
const filter = ref('')

// const rows = computed(() => {
// 	let root = [
// 		{
// 			id: 100,
// 			label: 'Все категории',
// 			header: 'root',
// 			children: cat.categories,
// 		},
// 	]
// 	return root
// })

const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 190) + 'px;'
})

const hei1 = computed(() => {
	return 'height: ' + (window.innerHeight - 240) + 'px;'
})

const add = (e: any) => {
	let temp = {
		id: uid(),
		label: 'New',
		selected: true,
		childs: [],
		children: [],
	}
	console.log(e)
	console.log(temp)
	// cat.addCategory(temp, e)
}

const addRoot = () => {
	// let temp: any = {
	// 	id: 700,
	// 	label: 'Fuck',
	// 	selected: true,
	// }
	// rows.value[0].children.push(temp)
	// selected.value = 'Fuck'
}

const menu = [
	{
		id: 0,
		label: 'Добавить',
		icon: 'mdi-plus-circle-outline',
		action: add,
		className: '',
	},
	{ id: 4, label: 'Редактировать', icon: 'mdi-pencil', className: '' },
	{ id: 1, label: 'Копировать', icon: 'mdi-content-copy', className: '' },
	{ id: 2, label: 'Вставить', icon: 'mdi-content-paste', className: '' },
	{ id: 3, label: 'Удалить', icon: 'mdi-trash-can-outline', className: '' },
]

const killNode = (e: any) => {
	let index = cat.categories.indexOf(e)
	cat.categories.splice(index, 1)
}

const newcat = ref('')
const expanded = ref(['Все категории', 'Продажи', 'Оплата'])
</script>

<style scoped lang="scss">
.tree {
	margin-right: 1rem;
	// background: pink;
	// position: relative;
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
</style>
