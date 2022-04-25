<template lang="pug">
q-drawer(v-model="mystore.keyDrawer" overlay side="right" :width="300" )
	KeywordList
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import KeywordList from '@/components/KeywordList.vue'

const mystore = useStore()
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.date {
	margin-top: 0;
}
</style>
