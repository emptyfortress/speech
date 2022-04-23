<template lang="pug">
q-page(padding)
	.container
		.row.justify-start.items-center
			q-icon(name="mdi-finance" size="sm").q-mr-sm
			.zag Отчеты
		.grid
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
				q-chip(v-for="(item,index) in filteredReports" v-model:selected="item.selected" :key="item.id" clickable :removable="editMode" :class="chipClass" @remove="removeChip(index)")
					.ellipsis
						|{{ item.label}}
						q-tooltip(anchor="top middle" self="bottom middle" :delay="800") {{ item.label}}
		br
		Options
		br
		q-card
			q-card-section.row.justify-between.items-center
				.subtitle-1
						q-icon(name="mdi-key").q-mr-sm
						|Ключевые слова
				q-btn(flat round icon="mdi-book-open-page-variant-outline" size="sm" @click="toggle")
			q-card-section
				q-input(outlined  v-model="key" clearable autogrow)
			q-separator
			q-card-actions
				q-btn(flat) Cancel
				q-btn(flat) Cancel
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useStore } from '@/stores/store'
import Options from '@/components/Options.vue'

// import ChipCalendar from '@/components/ChipCalendar.vue'
import { starredReports } from '@/stores/data'

const filter = ref('')
const key = ref('test')

const chips = reactive(starredReports)
const editMode = ref(false)
const toggleEdit = () => {
	editMode.value = !editMode.value
}
const chipClass = computed(() => {
	if (editMode.value) return 'shake'
	return ''
})
const removeChip = (e: number) => {
	chips.splice(e, 1)
}

const filteredReports = computed(() => {
	return chips.filter((item) => item.label.includes(filter.value))
})

const mystore = useStore()
const toggle = mystore.toggleRightDrawer
const selectChip = (e: string) => {
	key.value = e
}
</script>

<style scoped lang="scss">
.starred {
	grid-column: 1 / -1;
	padding: 0;
	.q-card__section {
		padding: 1rem 0 0 0;
	}
}
.q-input {
	transform: translateY(-7px);
	width: 230px;
}
.q-field--dense {
	height: 32px;
}
.q-chip {
	max-width: 200px;
}
.q-icon {
	margin-bottom: 3px;
}
.block {
	min-width: 18%;
	min-height: 50px;
	background: white;
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
