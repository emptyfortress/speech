<template lang="pug">
#speech
//- div(class="q-pa-md row justify-center")
.talk
	div(style="width: 100%;")
		q-chat-message(name="оператор"
			avatar="@/assets/img/headset.svg"
			:text="['doing fine, how r you?']"
			bg-color="blue-2"
			)
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
</style>
