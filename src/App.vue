<script setup lang="ts">
import { ref, reactive } from 'vue'
import SvgIcon from './components/SvgIcon.vue'
import Drawer from '@/components/Drawer.vue'
// import RDrawer from '@/components/RDrawer.vue'

const leftDrawer = ref(true)
const rightDrawer = ref(false)
const toggleLeftDrawer = () => (leftDrawer.value = !leftDrawer.value)
const toggleRightDrawer = () => (rightDrawer.value = !rightDrawer.value)

const toggleDr = () => {
	if (rightDrawer.value === true) {
		rightDrawer.value = false
	}
}
</script>

<template lang="pug">
q-layout(view="hHh LpR fFf")
	q-header(reveal ).head
		q-toolbar(shrink)
			q-btn(dense flat round  @click="toggleLeftDrawer")
				SvgIcon(name="sound" color="red")
			//- img(src="@/assets/img/logo.svg" width="32")

			q-toolbar-title.gt-sm
				span SD platform
			q-space
			q-btn(dense flat round icon="mdi-bell-outline")
			q-btn(dense round unelevated color="light-blue-2" @click="toggleRightDrawer").q-mx-md
				q-avatar(color="blue")
					img(src="@/assets/img/user0.svg")

	Drawer(:show="true")

	q-drawer(v-model="rightDrawer" side="right" overlay bordered @toggle="toggleRightDrawer")
		p fuck
		p fuck
		p fuck
		p fuck
		p fuck
	//- RDrawer(:show="rightDrawer")

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(:name="route.meta.transition || 'fade'")
				component(:is="Component")
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.head {
	color: $text-bright;
	background: transparent;
}
</style>
