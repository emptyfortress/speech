<template lang="pug">
q-page(padding)
	.container
		q-tree(:nodes="treeData" node-key="id" v-model:expanded="expanded" default-expand-all)
			template(v-slot:default-header="prop")
				.row.items-center
					img(src="@/assets/img/and.svg" v-if="prop.node.typ === 0")
					img(src="@/assets/img/or.svg" v-if="prop.node.typ === 1")
					.text-weight-bold {{ prop.node.label }}
				component(:is="TreeMenu" :node="prop.node" @addOp="addOperator(prop.node)" @addCond="addCondition(prop.node)" @kill="del(prop.node)")


</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { uid } from 'quasar'
import QueryI from '@/components/common/QueryI.vue'
import TreeMenu from '@/components/TreeMenu.vue'
import { deleteNodeFromTree, insertNodeIntoTree } from '@/utils/utils'
import type { Ref } from 'vue'

const treeData = reactive([
	{
		id: '0',
		label: '',
		typ: 0,
		children: [
			{ id: '2', typ: 1, label: 'Условие', children: [] },
			{ id: '3', typ: 2, label: 'Условие', children: [] },
		],
	},
])

const selected = ref(treeData[0].id)
const expanded: Ref<string[]> = ref(['0'])

const addOperator = (e: Category) => {
	let node = {
		id: uid(),
		label: 'fucking',
		typ: 0,
		children: [],
	}
	insertNodeIntoTree(treeData[0], e.id, node)
	selected.value = node.id
	expanded.value.push(e.id)
}
const pri = () => {
	console.log(expanded.value)
}

const addCondition = (e: Category) => {}

const del = (e: Category) => {
	deleteNodeFromTree(treeData[0], e.id)
}

const next = (e: any) => {
	if (e.typ === 2) {
		e.typ = 1
	} else e.typ = e.typ + 1
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
