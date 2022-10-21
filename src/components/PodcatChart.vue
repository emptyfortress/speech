<template lang="pug">
component(:is="VueApexCharts" type="bar" height="360" :options="podcatOptions" :series="podcatSeries")
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { podcatOptions, podcatSeries } from '@/stores/operoptions'
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
</style>
