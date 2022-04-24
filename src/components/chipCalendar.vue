<template lang="pug">
div
	MyChip(:label="label")
	q-btn(flat round icon="mdi-calendar" @click="toggle")
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import MyChip from '@/components/MyChip.vue'

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
