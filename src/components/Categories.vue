<template lang="pug">
q-page(padding)
	.container
		q-item
			q-item-section(avatar).line
				q-avatar(icon="mdi-lan" flat)
			q-item-section
				.zag
					|Категории
					q-badge(color="orange" class="q-ml-sm") New!
		q-card-section
			q-splitter(v-model="split1" :limits="[20, 50]" :style="hei")
				template(v-slot:before)
					.tree
						q-btn(round color="primary" icon="mdi-plus" size="md").fab1
						q-input(dense debounce="0" color="primary" autofocus v-model="filter" clearable)
							template(v-slot:prepend)
								q-icon(name="mdi-magnify")

						q-scroll-area(:style="hei1")
							q-tree(:nodes="rows"
								node-key="label"
								selected-color="primary"
								v-model:selected="selected"
								:filter="filter"
								default-expand-all).cat
								template(v-slot:header-root="prop")
									.row.items-center.justify-between
										div {{prop.node.label}}
										div ({{cat.catList.length}})
								template(v-slot:default-header="prop")
									.nod
										|{{prop.node.label}}
										q-btn(flat round icon="mdi-close" dense size="xs" @click="killNode(prop.node)").del

				template(v-slot:after)
					component(:is="Subcategories" :selected="selected")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCategory } from '@/stores/category'
import Subcategories from '@/components/Subcategories.vue'

const cat = useCategory()

const split1 = ref(20)
const selected = ref(cat.categories[1].label)
const filter = ref('')

const rows = computed(() => {
	let root = [
		{
			id: 100,
			label: 'Все категории',
			header: 'root',
			children: cat.categories,
		},
	]
	return root
})
const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 190) + 'px;'
})
const hei1 = computed(() => {
	return 'height: ' + (window.innerHeight - 240) + 'px;'
})
const killNode = (e: any) => {
	let index = cat.categories.indexOf(e)
	cat.categories.splice(index, 1)
}
</script>

<style scoped lang="scss">
.tree {
	margin-right: 1rem;
}
.fab1 {
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
}
.row {
	width: 100%;
}
.nod {
	position: relative;
	width: 100%;
	.del {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		visibility: hidden;
	}
}
.q-tree__node--selected .del {
	visibility: visible;
}
</style>
