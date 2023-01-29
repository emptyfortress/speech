<script setup lang="ts">
import { useLogic } from '@/stores/logic'
import Puzzle from '@/components/Puzzle.vue'

const logic = useLogic()
</script>

<template lang="pug">
q-dialog(v-model="logic.inception")
	q-card
		q-card-section.row.items-baseline.q-pb-none
			q-space
			#zg(contenteditable @blur="update") {{ logic.currentLogic.label }}
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section 
			#comment(contenteditable @blur="updatecomment") {{logic.currentLogic.comment}}

		q-card-section
			component(:is="Puzzle")

		q-card-section
			q-card-actions(align="right")
				q-btn(flat label="Отмена" color="primary" v-close-popup)
				q-btn(unelevated color="primary" icon="mdi-content-save-outline" label="Применить" @click="save")
		
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
.q-dialog__inner--minimized > div {
	min-width: 70%;
}
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
