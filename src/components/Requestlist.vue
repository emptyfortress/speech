<template lang="pug">
.starred
	.row.justify-between.items-center
		.subtitle-1(@click="toggleEdit")
			q-icon(name="mdi-star-outline").q-mr-sm
			|Избранное
			q-icon(name="mdi-pencil-outline" ).editicon
		q-input(dense v-model="filter" clearable hide-bottom-space @clear="filter = ''")
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")
	q-card-section
		q-chip(v-for="(item,index) in chips"
			v-model:selected="item.selected"
			:key="item.id"
			:removable="editMode"
			:class="chipClass"
			clickable
			@remove="removeChip(index)"
			@click="click(item)")
			.ellipsis
				|{{ item.label}}
			q-tooltip(anchor="top middle" self="bottom middle" :delay="800") {{ item.label}}
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { logicRec } from '@/stores/data.js'

const filter = ref('')
const editMode = ref(false)
const toggleEdit = () => (editMode.value = !editMode.value)

const chips = [...logicRec]

const chipClass = computed(() => {
	if (editMode.value) return 'shake'
	else return ''
})

const removeChip = (e: number) => {
	let item = chips[e]
	chips.splice(e, 1)
	mystore.removeKeyByIndex(e)
	show(item)
}
</script>

<style scoped lang="scss">
.starred {
	padding: 0;
	.q-card__section {
		padding: 1rem 0 0 0;
	}
}
.subtitle-1 {
	cursor: pointer;
	.editicon {
		display: none;
		margin-left: 0.5rem;
	}
	&:hover {
		.editicon {
			display: inline-block;
		}
	}
}
</style>
