<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from '@/stores/store'
import SvgIcon from './components/SvgIcon.vue'
import Drawer from '@/components/Drawer.vue'
import DateDrawer from '@/components/DateDrawer.vue'
import KeyDrawer from '@/components/KeyDrawer.vue'
import SiriWave from 'siriwave'

const mystore = useStore()
const toggleLeftDrawer = mystore.toggleLeftDrawer
const toggle = mystore.toggleRightDrawer(2)

onMounted(() => {
	var siriWave1 = new SiriWave({
		container: document.getElementById('siri')!,
		// width: 200,
		// height: 50,
		style: 'ios',
		cover: true,
		color: '#E45BCE',
	})
})

const isLoading = ref(false)
const refresh = () => {
	isLoading.value = true
	setTimeout(() => {
		isLoading.value = false
	}, 3000)
}
</script>

<template lang="pug">
q-layout(view="hHh LpR fFf")
	q-header(reveal ).head
		q-toolbar(shrink)
			q-btn(dense flat round  @click="toggleLeftDrawer")
				SvgIcon(name="sound" color="var(--q-accent)")

			q-toolbar-title(@click="toggleLeftDrawer").gt-sm.cursor-pointer
				span Речевая платформа Speech Drive
			q-space
			q-btn(dense flat round @click="refresh").q-mr-sm
				SvgIcon(name="refresh" :spin="isLoading" )
			q-btn(dense flat round icon="mdi-book-open-page-variant-outline" @click="mystore.toggleKeyDrawer").q-mr-sm
			q-btn(dense flat round icon="mdi-bell-outline")
				q-badge(floating rounded color="red") 3
			q-btn(dense round unelevated).q-mx-md
				q-avatar(color="blue" size="30px")
					img(src="@/assets/img/user0.svg")

	q-linear-progress(indeterminate color="accent" size="3px" v-show="isLoading")
	Drawer(:show="mystore.leftDrawer")
	DateDrawer
	KeyDrawer

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(:name="route.meta.transition || 'fade'")
				component(:is="Component")
	transition(name="fade")
		#siri(v-show="isLoading")
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.head {
	color: $text-bright;
	background: transparent;
}
#siri {
	width: 800px;
	height: 400px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.q-linear-progress {
	position: fixed;
	top: 0;
	left: 0;
}
</style>
