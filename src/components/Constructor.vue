<template lang="pug">
q-dialog(v-model="props.dialog" persistent :maximized="props.maximized" transition-show="slide-up" transition-hide="slide-down")
	q-card
		q-card-section
			h3 test
</template>

<script setup lang="ts">
const props = defineProps({
	dialog: Boolean,
	maximized: Boolean,
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.q-card {
	// background: $bgHead;
	background: #e7e9e2;
}
</style>
