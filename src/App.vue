<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from '@/stores/store'
import SvgIcon from '@/components/SvgIcon.vue'
import Drawer from '@/components/Drawer.vue'
import DateDrawer from '@/components/DateDrawer.vue'
import KeyDrawer from '@/components/KeyDrawer.vue'
import SpeechDrawer from '@/components/SpeechDrawer.vue'
import SiriWave from 'siriwave'

const mystore = useStore()
const toggleLeftDrawer = mystore.toggleLeftDrawer

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
	q-header().head
		q-toolbar(shrink)
			q-btn(dense flat round  @click="toggleLeftDrawer")
				SvgIcon(name="sound" color="#1565c0")

			q-toolbar-title(@click="toggleLeftDrawer").gt-sm.cursor-pointer
				span.hd Речевая платформа Speech Drive
			q-space
			q-btn(dense flat round @click="refresh").q-mr-sm
				SvgIcon(name="refresh" :spin="isLoading" )
			q-btn(dense flat round icon="mdi-book-open-page-variant-outline" @click="mystore.toggleKeyDrawer").q-mr-sm
			q-btn(dense flat round icon="mdi-bell-outline")
				q-badge(floating rounded color="red") 3
			q-btn(dense round unelevated).q-mx-md
				q-avatar(color="blue" size="30px")
					img(src="@/assets/img/user0.svg")
				q-menu(transition-show="jump-down" transition-hide="jump-up")
					q-list
						q-item(clickable v-close-popup)
							q-item-section(avatar)
								q-icon(name="mdi-account-search")
							q-item-section Пользователи
						q-item(clickable v-close-popup)
							q-item-section(avatar)
								q-icon(name="mdi-card-account-details-outline")
							q-item-section Профиль
						q-item(clickable v-close-popup)
							q-item-section(avatar)
								q-icon(name="mdi-information-outline")
							q-item-section О программе
						q-item(clickable v-close-popup)
							q-item-section(avatar)
								q-icon(name="mdi-location-exit")
							q-item-section Выйти

		q-linear-progress(indeterminate color="accent" size="3px" v-show="isLoading")

	Drawer(:show="mystore.leftDrawer")
	DateDrawer
	KeyDrawer
	SpeechDrawer

	q-page-container
		router-view
	transition(name="fade")
		#siri(v-show="isLoading")
</template>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.head {
	color: $text-bright;
	// background: $bgMain;
	background: rgba(0, 0, 0, 0.07);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
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
.hd {
	color: #777;
	// text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
	// font-weight: 600;
}
</style>
