<template lang="pug">
q-splitter(v-model="split2" :limits="[50, 100]" :style="hei")
	template(v-slot:before)
		.q-px-sm
			q-tab-panels(v-model="selected" animated transition-prev="jump-up" transition-next="jump-up" )
				template(v-for="item in list" :key="item.id")
					q-tab-panel(:name="item.label")
						.text-h6 {{ item.label }}
						.q-mt-md Подкатегории:
						q-list
							q-item(clickable v-for="podcat in item.childs")
								q-item-section(avatar)
									q-icon(name="mdi-magnify")
								q-item-section {{ podcat.label }}


	template(v-slot:after)
		.q-px-sm
			p fuck
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCategory } from '@/stores/category'

const cat = useCategory()
const split2 = ref(50)
const list = ref(cat.catList)
const selected = ref('Продажи')

const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 190) + 'px;'
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.q-tab-panels {
	margin-top: 2.5rem;
	border-radius: $radius-md;
	box-shadow: $card-shadow;
}
</style>
