<template lang="pug">
.all
	.group
		.scope(@click="next" :class="props.item.condition")
			.add(@click.stop="$emit('add')")
				q-icon(name="mdi-plus")
		.cond
			.myrow
				q-select(label="Контекстное правило" dense v-model="props.item.mod1" :options="ruleOptions" width="200")
				template(v-if="props.item.mod1 !== '' ")
					div
						q-select(dense
							v-model="props.item.mod2"
							use-input
							input-debounce="0"
							:options="options"
							@filter="filterFn"
							label="Ключевое слово"
							).keys
							template(v-slot:no-option)
								q-item.text-grey
									q-item-section No results
						q-checkbox(v-model="wordforms" label="Искать производные формы" dense size="xs").wordform
					q-select(label="Канал" dense v-model="channel" :options="channelOptions")
				template(v-if="okolo")
					div
					div
						q-select(dense
							v-model="key2"
							use-input
							input-debounce="0"
							:options="options"
							@filter="filterFn"
							label="Ключевое слово"
							).keys
							template(v-slot:no-option)
								q-item.text-grey
									q-item-section No results
						q-checkbox(v-model="wordforms" label="Искать формы" dense size="xs").wordform
					q-select(label="Канал" dense v-model="channel" :options="channelOptions")
				.start(v-if="okolo")
					.full
						|Расстояние между словами, сек
						q-slider(v-model="fromStart" :min="0" :max="60" :step="1"  label color="primary")
					q-input(:model-value="fromStart" dense outlined bg-color="white" style="width: 50px")
				.start(v-if="start")
					.full
						|Расстояние от начала записи, сек
						q-slider(v-model="fromStart" :min="0" :max="60" :step="1"  label color="primary")
					q-input(:model-value="fromStart" dense outlined bg-color="white" style="width: 50px")
				.start(v-if="end")
					.full
						|Расстояние от конца записи, сек
						q-slider(v-model="fromStart" :min="0" :max="60" :step="1"  label color="primary")
					q-input(:model-value="fromStart" dense outlined bg-color="white" style="width: 50px")

		.btngr
			q-btn(round dense  unelevated icon="mdi-reload" @click="reset").invert
			q-btn(round dense  unelevated icon="mdi-trash-can-outline" @click="$emit('delete')" :disabled="disabled")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { words } from '@/stores/list'
import { useStore } from '@/stores/store'
import { ConditionEnum } from '@/types/type'

const props = defineProps<{
	item: Condition
	disabled: boolean
}>()

const rule = ref(props.item.mod1)
const key1 = ref(props.item.mod2)
const key2 = ref('')

const start = computed(() => {
	if (props.item.mod1 === 'Начало') {
		return true
	}
	return false
})
const end = computed(() => {
	if (props.item.mod1 === 'Завершение') {
		return true
	}
	return false
})
const okolo = computed(() => {
	if (props.item.mod1 === 'Около') {
		return true
	}
	return false
})

const fromStart = ref(10)
const mystore = useStore()
const stringOptions = words.map((item) => item.key)
const options = ref(stringOptions)
const filterFn = (val: string, update: Function) => {
	update(() => {
		if (val === '') {
			options.value = stringOptions
		} else {
			const needle = val.toLowerCase()
			options.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1)
		}
	})
}
const channelOptions = ['Все', 'Оператор', 'Клиент']
const channel = ref('Все')

const next = () => {
	const num: any = ConditionEnum[props.item.condition]
	if (num === 2) {
		props.item.condition = ConditionEnum[0]
	} else {
		props.item.condition = ConditionEnum[num + 1]
	}
}
const ruleOptions = ['Присутствует', 'Отсутствует', 'Около', 'Начало', 'Завершение']
const wordforms = ref(false)
const reset = () => {
	rule.value = ''
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
	padding-right: 0.5rem;
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
	background: #81df75;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #2d5e27;
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
	background: #fbb7e8;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #4f1c3c;
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
	margin: 0 2rem;
	display: grid;
	grid-template-columns: 180px 1fr 130px;
	align-items: flex-start;
	gap: 2rem;
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
.q-checkbox__label {
	font-size: 0.8rem;
}
.wordform {
	margin-top: 5px;
}
.start {
	grid-column: 2/-1;
	display: flex;
	font-size: 0.9rem;
	gap: 1rem;
	.full {
		width: 100%;
	}
}
</style>
