<template lang="pug">
.zag
	span Библиотека
	q-input(dense)
q-list(dense)
	q-item(v-for="item in lib" clickable :key="item.key")
		q-item-section
			q-checkbox(v-model="selection" size="xs" dense :val="item.key" :label="item.key")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { lib } from '@/stores/cloud'

const selection = ref([])
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.q-list {
	font-size: 0.9rem;
}
</style>
