<template lang="pug">

q-drawer(v-model="show" side="right" :width="200" )
	h2 Hello!
</template>

<script setup lang="ts">
const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
