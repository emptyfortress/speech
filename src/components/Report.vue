<template lang="pug">
q-page(padding)
	.container
		q-expansion-item(v-model="mystore.sett")
			template(v-slot:header)
				q-item-section(avatar)
					q-avatar(icon="mdi-finance" flat)
				q-item-section
					.zag Отчеты
				q-item-section(side)
					q-icon(name="mdi-tune-variant")
			q-card-section.q-px-md
				Starred
				Options
				Options1
		q-separator(v-show="!mystore.sett")
		//- Graph
		Stat
		Operatorstat
		Records
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import Starred from '@/components/Starred.vue'
import Options from '@/components/Options.vue'
import Options1 from '@/components/Options1.vue'
import Graph from '@/components/Graph.vue'
import Stat from '@/components/Stat.vue'
import Operatorstat from '@/components/Operatorstat.vue'
import Records from '@/components/Records.vue'

const mystore = useStore()
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
