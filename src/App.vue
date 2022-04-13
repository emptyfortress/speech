<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
const fuck: Number = 4
</script>

<template>
	<img src="@/assets/logo.png" />

	<HelloWorld :msg="fuck" />
	<router-view v-slot="{ Component, route }">
		<transition :name="route.meta.transition || 'fade'">
			<component :is="Component"></component>
		</transition>
	</router-view>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.one {
}
</style>
