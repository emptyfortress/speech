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
			clickable
			:removable="editMode"
			:class="chipClass"
			@remove="removeChip(index)"
			)
			.ellipsis
				|{{ item.label}}
			q-tooltip(anchor="top middle" self="bottom middle" :delay="800") {{ item.label}}
</template>

<script setup lang="ts">
import { ref, computed, reactive, watchEffect } from 'vue'
import { useStore } from '@/stores/store'

// import { starredReports } from '@/stores/data'
const mystore = useStore()

const filter = ref('')

const chips = mystore.chips

const editMode = ref(false)
const toggleEdit = () => {
	editMode.value = !editMode.value
}
const chipClass = computed(() => {
	if (editMode.value) return 'shake'
	else return ''
})

const removeChip = (e: number) => {
	chips.splice(e, 1)
}

const filteredReports = computed(() => {
	return chips.filter((item) => item.label.includes(filter.value))
})

const chipSelected = computed(() => {
	let keys = chips.filter((item) => item.selected).map((e) => e.label)
	return keys
})
watchEffect(() => mystore.setKeys(chipSelected.value))
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
