<template lang="pug">

q-drawer(v-model="show" side="right" :width="300" )
	q-date(v-model="model" range flat ).date
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
})
const model = ref(null)
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
