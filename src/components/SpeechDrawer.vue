<template lang="pug">
q-drawer(v-model="mystore.speechDrawer" overlay side="right" :width="400" ).rd.speech
	Speech
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import Speech from '@/components/Speech.vue'

const mystore = useStore()
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
