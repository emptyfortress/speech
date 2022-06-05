<template lang="pug">
q-drawer(v-model="mystore.notificationDrawer" overlay side="right" :width="300" ).rd
	.text-h6.row.justify-between.items-center
		|Уведомления
		q-btn(round flat icon="mdi-dots-horizontal")
	.row.justify-between.items-center
		div
			q-chip(clickable :label="chip.label" v-for="chip in chips" :key="chip.id" :class="{'selected' : chip.selected}" @click="select(chip)")
		q-btn(flat round icon="mdi-check-all")
			q-tooltip Прочитать все

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useStore } from '@/stores/store'

const chips = ref([
	{ id: 0, label: 'Все', selected: true },
	{ id: 1, label: 'Непрочитанные', selected: false },
])
const mystore = useStore()

const select = (e: Chip) => {
	chips.value.forEach((item) => (item.selected = false))
	e.selected = !e.selected
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
.date {
	margin-top: 0;
}
.q-chip {
	cursor: pointer;
	&.selected {
		background: $accent1;
		color: $blue-9;
	}
}
</style>
