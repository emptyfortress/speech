<template lang="pug">
.starred
	q-card-section
		.row.justify-between.items-center
			.subtitle-1(@click="toggleEdit")
				q-icon(name="mdi-star-outline").q-mr-sm
				|Избранное
				q-icon(name="mdi-pencil-outline" ).editicon
			q-input(dense v-model="filter" clearable hide-bottom-space @clear="filter = ''")
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")
	q-card-section
		q-chip(v-for="(item,index) in filteredReports"
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
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import { starredReports } from '@/stores/data'

const mystore = useStore()
const init = mystore.setChips(starredReports)

interface Chip {
	id: number
	value: string
	selected: boolean
	label: string
}

const filter = ref('')

const editMode = ref(false)
const toggleEdit = () => (editMode.value = !editMode.value)
const chipClass = computed(() => {
	if (editMode.value) return 'shake'
	else return ''
})

const removeChip = (e: number) => {
	mystore.chips.splice(e, 1)
	mystore.removeKeyByIndex(e)
}
const click = (e: any) => {
	if (e.selected === true) {
		mystore.addKey(e.value)
	} else {
		mystore.removeKey(e)
	}
}

const filteredReports = computed<Chip[]>(() =>
	mystore.chips.filter((item: Chip) => item.label.includes(filter.value))
)
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.starred {
	grid-column: 1 / -1;
	padding: 0;
	.q-card__section {
		padding: 1rem 0 0 0;
	}
}
.q-field--dense {
	height: 32px;
}
.q-chip {
	max-width: 200px;
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
.q-icon {
	margin-bottom: 3px;
}
.q-input {
	transform: translateY(-7px);
	width: 230px;
}
</style>
