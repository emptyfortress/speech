<template lang="pug">
q-expansion-item(v-model="stat").q-mt-md
	template(v-slot:header)
		q-item-section(avatar)
			q-avatar(icon="mdi-percent-circle-outline" flat)
		q-item-section
			.zag Статистика по ключевым словам
	q-card-section.q-px-md.q-pt-none
		.toolbar
			q-select(label="Сортировка" v-model="sort" dense)
			q-select(label="Часть речи" v-model="part" dense)
			q-input(v-model="filter" dense)
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")
			q-range(v-model="label" :min="20" :max="400" :step="4" label color="primary" label-always)
		.text-center
			Wordchip(v-for="chip in chips" :key="chip.key" :label="chip.key" :count="chip.value" :part="chip.part")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Wordchip from '@/components/common/Wordchip.vue'
import { chips } from '@/stores/chips'

const stat = ref(true)
const filter = ref('')
const sort = ref('Алфавит А-Я')
const part = ref('Существительные')
const label = ref({ min: 50, max: 300 })
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.toolbar {
	margin-bottom: 1.5rem;
	font-size: 0.9rem;
	display: grid;
	grid-template-columns: 1fr 1fr 2fr 3fr;
	align-items: baseline;
	gap: 2rem;
}
.q-range {
	transform: translateY(14px);
}
</style>
