<template lang="pug">
q-input(ref="input" dense v-model="filter" autofocus clearable hide-bottom-space  @update:model-value="test")
	template(v-slot:prepend)
		q-icon(name="mdi-magnify")

q-list(dense)
	q-item(v-for="item in filteredItems" clickable :key="item.key")
		q-item-section
			q-checkbox(v-model="selection" size="xs" dense :val="item.key" :label="item.key")
		q-item-section(side)
			q-icon(name="mdi-trash-can-outline" size="xs")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { lib } from '@/stores/cloud'

const selection = ref([])
const input = ref(null)
const filter = ref('')
const test = () => {
	console.log(filter.value)
}
const filteredItems = computed(() => {
	if (filter.value) {
		return lib.filter((item) => item.key.includes(filter.value))
	}
	return lib
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.q-list--dense {
	font-size: 0.9rem;
	.q-item {
		padding-left: 6px;
		padding-right: 6px;
	}
}
.q-input {
	transform: translateY(-7px);
}
.q-field--dense {
	height: 32px;
}
</style>
