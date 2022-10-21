<template lang="pug">
.myrow
	.text-body1 {{ props.label }}
	div
		label(@click="tabl = false") Граф
		q-toggle(v-model="tabl" dense size="xs")
		label(@click="tabl = true") Таблица
transition(name="slide-bottom")
	component(:is="CatTable" v-if="tabl" :rows="cat.getItemChildren" :level="cat.getItem?.level").full-width
	.full-width(v-else)
		component(:is="PodcatChart")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useCat } from '@/stores/category1'
import CatTable from '@/components/CatTable.vue'
import PodcatChart from '@/components/PodcatChart.vue'

const props = defineProps({
	label: String,
})

const tabl = ref(true)
const cat = useCat()
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';

.myrow {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
}
label {
	font-size: 0.8rem;
	margin: 0 0.5rem;
	cursor: pointer;
}
</style>
