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
						q-input(dense debounce="0" color="primary" v-model="filter" clearable)
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

				template(v-slot:after)
					component(:is="Subcategories")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCategory } from '@/stores/category'
import Subcategories from '@/components/Subcategories.vue'

const cat = useCategory()

const split1 = ref(25)
const selected = ref('Продажи')
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
</script>

<style scoped lang="scss">
.tree {
	margin-right: 0.5rem;
}
.fab1 {
	position: absolute;
	bottom: 0.5rem;
	right: 0.5rem;
}
</style>
