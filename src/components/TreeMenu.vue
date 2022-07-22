<template lang="pug">
q-menu(context-menu)
	q-list
		q-item(v-for="item in menu" :key="item.id" clickable v-close-popup @click="item.action" :class="item.className")
			q-item-section(avatar)
				q-icon(:name="item.icon")
			q-item-section
				q-item-label {{item.label}}
</template>

<script setup lang="ts">
const emit = defineEmits(['addOp', 'addCond', 'kill'])

const addOp = () => {
	emit('addOp')
}
const addCond = () => {
	emit('addOp')
}
const kill = () => {
	emit('kill')
}

const menu = [
	{ id: 0, label: 'Добавить оператор', icon: 'mdi-gate-and', action: addOp },
	{ id: 1, label: 'Добавить условие', icon: 'mdi-crosshairs-question', action: addCond },
	{ id: 2, label: 'Вырезать', icon: 'mdi-content-cut', action: addOp },
	{ id: 3, label: 'Вставить', icon: 'mdi-content-paste', action: addOp },
	{ id: 4, label: 'Удалить', icon: 'mdi-trash-can-outline', action: kill, className: 'sep' },
]
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.sep {
	border-top: 1px solid #ccc;
}
</style>
