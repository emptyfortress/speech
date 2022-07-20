<template lang="pug">
q-page(padding).rel
	.container
		//- draggable(:list="nodes" tag="q-tree" )
		q-tree(:nodes="nodes"
			node-key="id"
			default-expand-all)

			template(v-slot:header-root="prop")
				div(class="row items-center")
					q-icon(name="mdi-android-studio" color="orange" size="28px" class="q-mr-sm")
					div {{ prop.node.label }}

			template(v-slot:default-header="prop")
				draggable(:list="nodes[0].children" item-key="id")
					template(#item="{ element }")
						div(class="row items-center")
							img(src="@/assets/img/and.svg" class="q-mr-sm" width="48")
							div(class="text-weight-bold text-primary") {{ element.label }}

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import draggable from 'vuedraggable'

const nodes = reactive([
	{
		id: 0,
		header: 'root',
		label: 'Отсутствует здравствуйте',
		children: [
			{
				id: 1,
				label: 'one',
				children: [
					{ id: 13, label: 'fuck' },
					{ id: 23, label: 'fuck' },
					{ id: 33, label: 'fuck' },
					{ id: 43, label: 'fuck' },
					{ id: 53, label: 'fuck' },
				],
			},
			{ id: 2, label: 'two' },
			{ id: 3, label: 'three' },
			{ id: 4, label: 'four' },
		],
	},
])
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
