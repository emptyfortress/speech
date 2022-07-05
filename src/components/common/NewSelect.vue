<template lang="pug">
q-select(dense
	v-model="props.model"
	use-input
	multiple
	clearable
	input-debounce="0"
	:options="propOptions"
	@clear="clear()"
	@filter="filterFn"
	).small
	template(v-slot:no-option)
		q-item.text-grey
			q-item-section No results
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps<{
	model: string[]
	options: string[]
}>()
const emit = defineEmits(['clear'])

const clear = () => {
	emit('clear')
}

const propOptions = ref(props.options)

const filterFn = (val: string, update: Function) => {
	update(() => {
		if (val === '') {
			propOptions.value = props.options
		} else {
			const needle = val.toLowerCase()
			propOptions.value = props.options.filter((v) => v.toLowerCase().indexOf(needle) > -1)
		}
	})
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
