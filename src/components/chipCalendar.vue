<template lang="pug">
div
	myChip(:label="label")
	q-btn(flat round icon="mdi-calendar" @click="toggle")
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import myChip from '@/components/myChip.vue'

const props = defineProps({
	label: {
		type: String,
	},
})

const mystore = useStore()
const toggle = () => {
	mystore.closeMenu()
	mystore.toggleRightDrawer()
}
</script>

<style scoped lang="scss"></style>
