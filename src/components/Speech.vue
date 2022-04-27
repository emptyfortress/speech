<template lang="pug">
#speech
.talk
	.grid
		q-btn(flat color="primary" padding="xs" label="00:01" size="md")
		q-chat-message(name="оператор"
			:text="['doing fine, how r you? lkajs dlkj alskdj laskj glaksj glaksj glkasjg lkasj glkasj glkasj glkajs gla lkaj slj asl']"
			bg-color="blue-2"
			).receive
	.grid
		q-btn(flat color="primary" padding="xs" label="00:01" size="md")
		q-chat-message(name="клиент"
			:text="['hey, how are you? laksjd lkasjd lkasj dlkajs dlkasjg lkasjd lkasj laks j']"
			bg-color="white"
			sent).sent

</template>

<script setup lang="ts">
// import { talks } from '@/stores/speech'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.talk {
	padding: 1rem 0;
	font-size: 0.9rem;
	line-height: 140%;
}
.grid {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	gap: 1rem;
	.receive {
		margin-right: 2rem;
	}
	.sent {
		margin-left: 2rem;
	}
	.q-btn {
		align-self: start;
		margin-top: 1rem;
	}
}
.flex {
	display: flex;
	justify-content: flex-start;
	gap: 0.5rem;
	align-items: center;
}
.flexend {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
}
</style>
