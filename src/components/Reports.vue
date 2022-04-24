<template lang="pug">
q-page(padding)
	.container
		.row.justify-start.items-center
			q-icon(name="mdi-finance" size="sm").q-mr-sm
			.zag Отчеты
		Starred(@select="addToKeys")
		//- Options
		Test
		q-card
			p lorem
</template>

<script setup>
import { ref, reactive } from 'vue'
// import { useStore } from '@/stores/store'
import Starred from '@/components/Starred.vue'
import Options from '@/components/Options.vue'
import Test from '@/components/Test.vue'

// import ChipCalendar from '@/components/ChipCalendar.vue'
// const mystore = useStore()

// interface Key {
// 	id: Number
// 	label: String
// 	selected: Boolean
// }

const keys = ref([])

const addToKeys = (e) => {
	if (e.selected === true) {
		keys.value.push(e.label)
	}
	console.log(keys)
}
const clear = () => {
	keys.value = []
}
</script>

<style scoped lang="scss"></style>
