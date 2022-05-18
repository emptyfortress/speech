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
				Chiplist(:chips="logicRec" :multiple="false" :tooltip="false")
					template(v-slot:header)
						q-icon(name="mdi-star-outline").q-mr-sm
						|Избранное

				//- Requestlist
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Chiplist from '@/components/common/Chiplist.vue'
import { logicRec } from '@/stores/data'

import Requestlist from '@/components/Requestlist.vue'

const req = ref(true)
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
