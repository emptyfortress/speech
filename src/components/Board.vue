<template lang="pug">
q-page(padding).rel
	.container
		q-tree(:nodes="nodes"
			node-key="id"
			default-expand-all)

			template(v-slot:header-root="prop")
				div(class="row items-center")
					q-icon(name="mdi-android-studio" color="orange" size="28px" class="q-mr-sm")
					div {{ prop.node.label }}
			template(v-slot:default-header="prop")
				div(class="row items-center")
					img(src="@/assets/img/and.svg" class="q-mr-sm" width="48")
					div(class="text-weight-bold text-primary") {{ prop.node.label }}
</template>

<script setup lang="ts">
const nodes = [
	{
		id: 0,
		header: 'root',
		label: 'Отсутствует здравствуйте',
		children: [
			{
				id: 1,
				label: 'one',
				children: [
					// { id: 3, label: 'fuck' },
					// { id: 3, label: 'fuck' },
					// { id: 3, label: 'fuck' },
					// { id: 3, label: 'fuck' },
					// { id: 3, label: 'fuck' },
				],
			},
			{ id: 2, label: 'two' },
			{ id: 3, label: 'three' },
			{ id: 4, label: 'four' },
		],
	},
]
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
