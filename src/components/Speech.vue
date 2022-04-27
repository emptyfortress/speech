<template lang="pug">
#speech
.talk(v-for="talk in filterTalks")
	.grid(v-if="talk.send")
		q-btn(flat color="primary" padding="xs" :label="talk.time" size="md")
		q-chat-message(name="оператор"
			:text="[talk.text]"
			bg-color="blue-2"
			).receive
	.grid(v-else)
		q-btn(flat color="primary" padding="xs" :label="talk.time" size="md")
		q-chat-message(name="клиент"
			:text="[talk.text]"
			bg-color="white"
			sent).sent

</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/stores/store'
import { talks, talks2, talks3 } from '@/stores/speech'

const mystore = useStore()

const filterTalks = computed(() => {
	switch (mystore.record) {
		case 'группа 2':
			return talks2
		case 'группа 3':
			return talks3
		default:
			return talks
	}

	return
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.talk {
	padding: 0;
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
		justify-self: flex-end;
	}
	.q-btn {
		align-self: start;
		margin-top: 1rem;
	}
}
</style>
