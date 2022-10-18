<template lang="pug">
q-expansion-item(v-model="tree")
	template(v-slot:header)
		q-item-section(avatar).line
			q-avatar(icon="mdi-file-tree" flat)
								q-item-section
			.zag Дерево категорий
q-splitter(v-model="splitterModel" style="height: 490px;")
	template(v-slot:before)
		q-card.left
			.top
				q-btn(round flat dense icon="mdi-unfold-more-horizontal")
					q-tooltip Развернуть
				q-input(dense ref="input" debounce="0" hide-bottom-space color="primary" autofocus v-model="filter" clearable @clear="filter = ''").input
					template(v-slot:prepend)
						q-icon(name="mdi-magnify")

			q-card-section
				q-scroll-area.scroll
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
								component(:is="WordHighlighter" :query="filter") {{prop.node.label}}

	template(v-slot:after)
		q-card.right
			p lakjsldj
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { useCat } from '@/stores/category1'
import WordHighlighter from 'vue-word-highlighter'
import { randomArray } from '@/utils/utils'

const cat = useCat()
const selected = ref(cat.cat[0].id)
const expanded: Ref<string[]> = ref(['0', '1'])

const splitterModel = ref(30)
const tree = ref(true)
const filter = ref('')
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	padding-bottom: 0;
}
.q-card {
	margin: 0.5rem;
}
.razv {
	font-size: 0.7rem;
	color: #666;
	cursor: pointer;
}
.scroll {
	height: 380px;
}
</style>
