<template lang="pug">
q-page(padding)
	.container
		q-expansion-item(v-model="mystore.sett").car
			template(v-slot:header)
				q-item-section(avatar)
					q-avatar(icon="mdi-tune-variant" flat)
				q-item-section
					.zag Отчеты
			q-card-section
				Chiplist(:chips="starredReports" :multiple="true" :tooltip="true")
					template(v-slot:header)
						q-icon(name="mdi-star-outline").q-mr-sm
						|Избранное

				//- Starred
				Options
				Options1
		Graph
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
import Chiplist from '@/components/common/Chiplist.vue'
import { starredReports } from '@/stores/data'

const mystore = useStore()
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
