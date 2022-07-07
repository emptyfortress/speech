<template lang="pug">
q-page(padding)
	//- q-btn(round color="primary" icon="mdi-plus" size="lg" @click="openDialog" :class="{rot : dialog}").fab
	.container
		q-expansion-item(v-model="mystore.cat")
			template(v-slot:header)
				q-item-section(avatar).line
					q-avatar(icon="mdi-lan" flat)
				q-item-section
					.zag Категории
			q-card-section
				q-splitter(v-model="splitterModel" :limits="[20, 100]").hei
					template(v-slot:before)
						q-tree(:nodes="cat.categories" node-key="label")
							template(v-slot:header-root="prop")
								.row.items-center
									q-icon(name="mdi-lan")
									div {{prop.node.label}}
										q-badge(color="orange" class="q-ml-sm") New!

					template(v-slot:after)
						p lajksdlajsl
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import { useCategory } from '@/stores/category'

const cat = useCategory()
const mystore = useStore()

const splitterModel = ref(45)
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';

.hei {
	height: calc(100vh - 190px);
	.q-splitter__separator {
		background: red;
	}
}
</style>
