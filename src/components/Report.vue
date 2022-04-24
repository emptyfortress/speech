<template lang="pug">
q-page(padding)
	.container
		.row.justify-start.items-center
			q-icon(name="mdi-finance" size="sm").q-mr-sm
			.zag Отчеты
		Starred
		Options
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Starred from '@/components/Starred.vue'
import Options from '@/components/Options.vue'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
