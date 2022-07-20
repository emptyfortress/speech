<template>
	<Tree :value="treeData" :indent="40" v-slot="{ node, index, path, tree }">
		<span>
			<b @click="tree.toggleFold(node, path)">
				{{ node.$folded ? '+' : '-' }}
			</b>
			{{ node.title }}
		</span>
	</Tree>
</template>

<script lang="ts">
import 'he-tree-vue/dist/he-tree-vue.css'
import { Tree, Fold, Draggable } from 'he-tree-vue'

export default {
	components: { Tree: Tree.mixPlugins([Fold, Draggable]) },
	data() {
		return {
			treeData: [{ title: 'node 1' }, { title: 'node 2', children: [{ title: 'node 2-1' }] }],
		}
	},
}
</script>
