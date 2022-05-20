<template lang="pug">
.box
	draggable(:list="list" item-key="id" @start="begin" @end="end")
		template(#item="{ element }")
			div
				QueryItem(:item="element" @invert="invert(element)" @add="add(element)" @delete="del(element)" @reset="res" )
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
import QueryItem from '@/components/QueryItem.vue'
import { useLogic } from '@/stores/logic'

const mystore = useLogic()

const list = computed(() => {
	const index = mystore.allLogic.findIndex((e) => e.id === mystore.activeLogic.id)
	if (mystore.allList[index].list.length) {
		return mystore.allList[index].list
	} else return [{ id: 0, and: true, mod1: null, mod2: null, mod3: null }]
})

const invert = (e: any) => {
	e.and = !e.and
}
const itemIndex = (e: any) => {
	return list.value.findIndex((item) => item.id === e.id)
}
const add = (e: any) => {
	let index = itemIndex(e)
	let newItem = {}
	newItem.id = new Date()
	newItem.and = true
	list.value.splice(index + 1, 0, newItem)
}
const del = (e: any) => {
	let index = itemIndex(e)
	list.value.splice(index, 1)
}
const res = (e: any) => {
	list.value[e].mod1 = null
	list.value[e].mod2 = null
	list.value[e].mod3 = null
}

const drag = ref(false)
let xStart = 0
let distance = 0
const begin = (e: any) => {
	drag.value = true
	xStart = e.originalEvent.clientX
	e.item.addEventListener('drag', (a: any) => {
		distance = a.clientX - xStart
	})
}
const end = (e: any) => {
	drag.value = false
	let elem = e.item.querySelector('.all')
	e.item.removeEventListener('drag', () => {})
	if (distance > 80) {
		elem.classList.add('fuck')
	}
	if (distance < -50) {
		elem.classList.remove('fuck')
	}
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.box {
	background-image: url(@/assets/img/vert.png);
	background-repeat: repeat-y;
	background-position-x: 48px;
}
</style>
