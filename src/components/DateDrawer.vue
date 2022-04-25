<template lang="pug">
q-drawer(v-model="mystore.dateDrawer" overlay side="right" :width="300" )
	q-btn(flat round icon="mdi-close" @click="toggle")
	q-btn(flat round icon="mdi-check" color="accent")
	q-btn(flat round icon="mdi-check-circle" color="accent" @click="toggle" )
	q-date(v-model="model" range flat color="accent").date
	q-btn(flat color="accent") Первый квартал
	q-btn(flat color="accent") Второй квартал
	q-btn(flat color="accent") Прошлый год
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const model = ref(null)

const mystore = useStore()
const toggle = () => mystore.toggleDateDrawer()
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.date {
	margin-top: 0;
}
</style>
