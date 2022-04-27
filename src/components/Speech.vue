<template lang="pug">
#speech
.talk
	.flex
		.time 00:01
		q-chat-message(name="оператор"
			:text="['doing fine, how r you?']"
			bg-color="blue-2"
			)
	.flexend
		.time 00:01
		q-chat-message(name="клиент"
			:text="['hey, how are you?']"
			bg-color="white"
			sent)

</template>

<script setup lang="ts">
// import { talks } from '@/stores/speech'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.talk {
	padding: 1rem 0;
	font-size: 0.9rem;
}
.flex {
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
	align-items: center;
}
.flexend {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
