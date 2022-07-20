<template lang="pug">
q-page(padding)
	.container
		component(:is="Draggable" :flatData="flatData" idKey="id" parentIdKey="pid")
			template(v-slot="{ node, tree }")
				b(@click="tree.toggleFold(node)") {{ node.$folded ? '+' : '-' }}
				span {{ node.text }}
</template>

<script setup lang="ts">
import '@he-tree/vue3/dist/he-tree-vue3.css'
import { Draggable } from '@he-tree/vue3'

const flatData = [
	{ text: 'node1', id: 1 },
	{ text: 'node2', id: 2 },
	{ text: 'node1-1', id: 3, pid: 1 },
	{ text: 'node1-2', id: 4, pid: 1 },
	{ text: 'node1-3', id: 5, pid: 1 },
]
</script>
