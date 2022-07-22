<template lang="pug">
q-page(padding).rel
	q-btn(round color="primary" icon="mdi-plus" size="lg" @click="openDialog" :class="{rot : dialog2}").fab
	.container
		q-expansion-item(v-model="mystore.cat")
			template(v-slot:header)
			q-item-section(avatar).line
				q-avatar(icon="mdi-lan" flat)
			q-item-section
				.zag Категории
		q-card-section
				component(:is="Chiplist" :chips="chips" :multiple="false" :tooltip="false")
			q-card-section.q-py-none
				component(:is="CommonOptions")
				q-card-actions.q-px-none
					q-btn(flat color="primary" label="Сбросить").q-mr-sm
					q-space
					q-btn(color="primary" flat label="Добавить к сравнению")
					q-btn(unelevated color="primary" icon="mdi-check-bold" label="Применить" @click="toggle")
				br
		component(:is="Graph2")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import { useCat } from '@/stores/category1'
import Chiplist from '@/components/common/Chiplist.vue'
import CommonOptions from '@/components/common/CommonOptions.vue'
import Graph2 from '@/components/Graph2.vue'

const mystore = useStore()
const mycat = useCat()

const chips = computed(() => {
	return mycat.cat[0].children
})
</script>

<style scoped lang="scss"></style>
