<template lang="pug">
.q-ml-md
	.q-mt-lg Добавляйте критерии и настраивайте условия запросов
	q-card
		q-card-section
			.row.items-center.justify-between
				q-btn(flat round dense @click="switchSidebar")
					q-icon(name="mdi-forwardburger" v-if="props.splitter === 0")
					q-icon(name="mdi-backburger" v-else)
				#zg(contenteditable @blur="update") {{ mystore.activeLogic.label }}
				.btngroup
					q-btn(outline size="10px" color="primary" @click="mystore.duble").q-mr-xs Дублировать
					q-btn(round flat icon="mdi-plus" dense color="primary" @click="mystore.addLogic")
			#comment(contenteditable @blur="updatecomment") {{mystore.activeLogic.comment}}
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useLogic } from '@/stores/logic'

const mystore = useLogic()

const props = defineProps({
	splitter: Number,
})
const emit = defineEmits(['maximize', 'reset'])

const switchSidebar = () => {
	if (props.splitter !== 0) {
		emit('maximize')
	} else emit('reset')
}
const update = () => {
	const zag = document.getElementById('zg')
	const text = zag!.innerHTML
	const index = mystore.allLogic.findIndex((item) => item.active)
	mystore.allLogic[index].label = text
}
const updatecomment = () => {
	const comm = document.getElementById('comment')
	const text = comm!.innerHTML
	const index = mystore.allLogic.findIndex((item) => item.active)
	mystore.allLogic[index].comment = text
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
#zg {
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 600;
	padding: 0.5rem;
	padding-bottom: 0;
	&:hover {
		background: $bgLight;
	}
	&:focus {
		outline: none;
		border-bottom: 1px dotted $primary;
		background: $bgSelection;
	}
}
#comment {
	font-size: 0.9rem;
	margin-top: 1rem;
	padding: 0.5rem;
	padding-bottom: 0;
	/* text-align: center; */
	&:hover {
		background: $bgLight;
	}
	&:focus {
		outline: none;
		border-bottom: 1px dotted $primary;
		background: $bgSelection;
	}
}
</style>
