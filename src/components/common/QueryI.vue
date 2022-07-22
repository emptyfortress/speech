<template lang="pug">
.node
	div
		q-checkbox(label="Not" v-model="not" dense size="xs" color="negative")
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const not = ref(false)
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.node {
	background: $bgMain;
	border: 1px solid #ccc;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 200px;
	&:hover {
		border: 1px solid $primary;
	}
}
.not {
}
</style>
