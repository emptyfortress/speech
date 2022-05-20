<template lang="pug">
.all()
	.group
		.scope(@click="next" :class="setClass")
			.add(@click.stop="$emit('add')")
				q-icon(name="mdi-plus")
		.cond
			.myrow laskjlk
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useLogic } from '@/stores/logic'

const mystore = useLogic()

const list = mystore.allList[0].list

const setClass = computed(() => {
	return list[0].condition
})

enum Conditions {
	'and' = 0,
	'or',
	'not',
}

const next = () => {
	const num = Conditions[list[0].condition]
	if (num === 2) {
		list[0].condition = Conditions[0]
	} else {
		list[0].condition = Conditions[num + 1]
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
.all {
	padding-left: 0.7rem;
	margin-top: 9px;
	&.fuck {
		margin-left: 80px;
		margin-top: -2px;
	}
}
.group {
	width: 100%;
	border: 2px solid #ccc;
	display: flex;
	justify-content: justify-between;
	align-items: center;
	background: $bgLight;
	position: relative;
	&:hover {
		border: 2px solid $primary;
		z-index: 4;
	}
}
.scope {
	width: 80px;
	text-align: center;
	font-size: 0.9rem;
	font-weight: bold;
	text-transform: uppercase;
	color: $primary;
	cursor: pointer;
	letter-spacing: 1px;
	&:hover .add {
		display: block;
	}
}
.cond {
	flex-grow: 1;
	padding: 0.5rem;
	margin-left: 80px;
}
.and {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 80px;
	background: $blue-3;
	display: flex;
	justify-content: center;
	align-items: center;
	color: $blue-10;
	&::after {
		content: 'and';
	}
}
.not {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 80px;
	background: $blue-3;
	display: flex;
	justify-content: center;
	align-items: center;
	color: $blue-10;
	&::after {
		content: 'not';
	}
}
.or {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: $blue-3;
	color: $blue-10;
	&::after {
		content: 'or';
	}
}
.add {
	position: absolute;
	left: -0.75rem;
	top: 50%;
	transform: translateY(-50%);
	width: 1.5rem;
	/* height: 1.5rem; */
	border-radius: 50%;
	background: #fff;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
	border: 1px solid $primary;
	z-index: 2;
	display: none;
}
.myrow {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding-left: 1rem;
	flex-wrap: wrap;
}
.norm {
	font-size: 0.8rem;
	width: 30%;
	min-width: 120px;
}
.btngr {
	white-space: nowrap;
	.invert {
		transform: scaleX(-1);
	}
}
</style>
