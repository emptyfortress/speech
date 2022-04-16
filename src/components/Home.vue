<template lang="pug">
q-page(padding)
	.container
		h2 Home! {{ foo }}
		q-btn(color="deep-orange") test
		br
		br
		.rip(v-app-ripple)
</template>

<script setup lang="ts">
const props = defineProps({
	foo: {
		type: String,
		default: 'test',
	},
})
</script>

<style scoped lang="scss">
// @import '@/assets/styles/main.scss';
//@import '@/assets/css/colors.scss';
.q-page {
}
.rip {
	width: 100px;
	height: 100px;
	background: #999;
}
.red--ripple {
	background: red;
	opacity: 0.2;
}
</style>
