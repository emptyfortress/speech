<template lang="pug">

q-drawer(v-model="show" side="right" :width="300" ).rdrawer
	q-btn(flat @click="toggle") Отмена
	q-btn(flat @click="toggle" color="accent") Применить
	q-date(v-model="model" range flat color="accent").date
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	},
})
const model = ref(null)
const mystore = useStore()
const toggle = () => {
	mystore.toggleMini()
	mystore.toggleRightDrawer()
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.date {
	margin-top: 0;
}
</style>
