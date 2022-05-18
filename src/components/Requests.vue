<template lang="pug">
q-page(padding).rel
	q-btn(round color="primary" icon="mdi-plus" size="lg" @click="dialog = !dialog" :class="{rot : dialog}").fab
	.container
		q-expansion-item(v-model="mystore.req")
			template(v-slot:header)
				q-item-section(avatar)
					q-avatar(icon="mdi-toy-brick-search-outline" flat)
				q-item-section
					.zag Логические запросы
			q-card-section
				component(:is="Chiplist" :chips="logicRec" :multiple="false" :tooltip="false")
					template(v-slot:header)
						q-icon(name="mdi-star-outline").q-mr-sm
						|Мои запросы
			q-card-section.q-py-none
				component(:is="CommonOptions")
				.bt
					q-btn(color="primary" flat label="Добавить к сравнению")
					div
						q-btn(unelevated color="primary" icon="mdi-check-bold" label="Применить" @click="toggle")
					q-btn(flat color="primary" label="Сбросить").q-mr-sm
		br
		br
		component(:is="Graph")
		component(:is="Operatorstat")
		component(:is="Records")

		Constructor(:dialog="dialog" :maximized="maximizedToggle")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Chiplist from '@/components/common/Chiplist.vue'
import CommonOptions from '@/components/common/CommonOptions.vue'
import Graph from '@/components/Graph.vue'
import Operatorstat from '@/components/Operatorstat.vue'
import Records from '@/components/Records.vue'
import Constructor from '@/components/Constructor.vue'
import { useStore } from '@/stores/store'

import { logicRec } from '@/stores/data'

const dialog = ref(true)
const maximizedToggle = ref(true)

const mystore = useStore()
const toggle = () => {
	mystore.loading = true
	mystore.req = false
	mystore.integral = true
	setTimeout(() => {
		mystore.loading = false
	}, 1700)
}
</script>

<style scoped lang="scss">
.bt {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.fab {
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	z-index: 6005;
	transition: 0.3s ease all;
}
.rot {
	transform: rotate(45deg);
}
</style>
