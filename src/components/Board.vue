<template lang="pug">
q-page(padding)
	.container
		component(:is="Draggable" ref="mytree" :treeData="treeData" :gap="8" :indent="80").mytree
			template(v-slot="{ node, tree }")
				template(v-if="node.typ")
					.row.items-center
						q-btn(flat dense round  @click="tree.toggleFold(node)")
							q-icon(:name="node.$folded ? 'mdi-menu-right' : 'mdi-menu-down'")
						template(v-if="node.typ === 1")
							img(src="@/assets/img/and.svg" v-if="node.typ" @click="next(node)").q-mr-md
							span(@click="next(node)") Оператор И
						template(v-if="node.typ === 2")
							img(src="@/assets/img/or.svg" v-if="node.typ" @click="next(node)").q-mr-md
							span(@click="next(node)") Оператор ИЛИ
						template(v-if="node.typ === 3")
							img(src="@/assets/img/not.svg" v-if="node.typ" @click="next(node)").q-mr-md
							span(@click="next(node)") Оператор НЕ
				template(v-else)
					.row.items-center.node
						q-btn(flat dense round  @click="tree.toggleFold(node)")
							q-icon(:name="node.$folded ? 'mdi-menu-right' : 'mdi-menu-down'")
						span {{node.text}}
				q-menu(context-menu)
					q-list
						q-item(clickable v-close-popup @click="addOperator(node)")
							q-item-section(avatar)
								q-icon(name="mdi-gate-and")
							q-item-section
								q-item-label Добавить оператор
						q-item(clickable v-close-popup @click="addCondition(node)")
							q-item-section(avatar)
								q-icon(name="mdi-crosshairs-question")
							q-item-section
								q-item-label Добавить условие

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import '@he-tree/vue3/dist/he-tree-vue3.css'
import { Draggable } from '@he-tree/vue3'
import { uid } from 'quasar'

const treeData = reactive([
	{
		id: '1',
		text: '',
		typ: 1,
		children: [{ id: '2', text: 'Условие', children: [] }],
	},
])

const mytree = ref()

const addOperator = (e: any) => {
	mytree.value.addNode({ id: uid(), text: '', typ: 1, children: [] }, e.id)
}

const addCondition = (e: any) => {
	mytree.value.addNode({ id: uid(), text: 'Условие', children: [] }, e.id)
}

const del = (e: Node) => {
	mytree.value.removeNode(e)
}

const next = (e: any) => {
	if (e.typ === 3) {
		e.typ = 1
	} else e.typ = e.typ + 1
}

const start = () => {
	console.log(1)
	console.log(mytree.value.dragging)
	console.log(mytree.value)
}
const end = () => {
	console.log(2)
	console.log(mytree.value.dragging)
}

const test = () => {
	let temp = mytree.value.outputNestedData()
	console.log(temp)
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.node {
	background: #fff;
	border: 1px solid #ccc;
	padding: 0.5rem;
}
</style>
