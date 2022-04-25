<template lang="pug">
q-page(padding)
	.container
		.row.justify-start.items-center
			q-icon(name="mdi-finance" size="sm").q-mr-sm
			.zag Отчеты
		Starred
		Options
		Options1
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Starred from '@/components/Starred.vue'
import Options from '@/components/Options.vue'
import Options1 from '@/components/Options1.vue'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
