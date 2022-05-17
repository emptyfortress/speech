<template lang="pug">
q-page(padding)
	.container
		q-expansion-item(v-model="req")
			template(v-slot:header)
				q-item-section(avatar)
					q-avatar(icon="mdi-toy-brick-search-outline" flat)
				q-item-section
					.zag Логические запросы
			q-card-section
				Requestlist
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Requestlist from '@/components/Requestlist.vue'

const req = ref(true)
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
