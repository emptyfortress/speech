<template lang="pug">
.box
	draggable(:list="list" item-key="id" @start="begin" @end="end")
		template(#item="{ element }")
			div
				QueryItem(:item="element"  @add="add(element)" @delete="del(element)" :disabled="list.length === 1")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
import QueryItem from '@/components/QueryItem.vue'
import { useLogic } from '@/stores/logic'

const mystore = useLogic()

const list = computed(() => {
	const id = mystore.activeLogic.id
	const temp = mystore.allList.find((e) => e.id === id)
	return temp!.list
})

const itemIndex = (e: List) => {
	return list.value.findIndex((item) => item.id === e.id)
}
const add = (e: List) => {
	let index = itemIndex(e)
	let newItem = {} as Condition
	newItem.id = list.value.length + 1
	newItem.condition = 'and'
	list.value.splice(index + 1, 0, newItem)
}
const del = (e: any) => {
	let index = itemIndex(e)
	list.value.splice(index, 1)
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
