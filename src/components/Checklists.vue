<template lang="pug">
q-page(padding)
	.container
		.zag(@click="show") Checklists!
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'

const $q = useQuasar()

const show = () => {
	$q.notify('fuck')
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
