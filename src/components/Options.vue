<template lang="pug">
.grid
	div
		.label Ключевые слова
		q-select(dense
			v-model="mystore.keys"
			use-input
			use-chips
			multiple
			clearable
			outlined
			input-debounce="0"
			:options="options"
			@clear="clear"
			bg-color="white").keys
			template(v-slot:option="scope")
				q-item(clickable v-bind="scope.itemProps")
					q-item-section(side v-if="scope.opt.voc")
						component(:is="SvgIcon" name="vocabulary").lib
					q-item-section
						q-item-label {{scope.opt.value}}
			template(v-slot:no-option)
				q-item.text-grey
					q-item-section No results

	MySelect(label="Тип искомых слов" :model="typmodel" :options="typ")
	MySelect(label="Положение слова в записи" :model="placemodel" :options="place")
	MySelect(label="Канал" :model="channelmodel" :options="channel")

</template>

<script setup>
import { ref } from 'vue'
import { words } from '@/stores/list'
import { useStore } from '@/stores/store'
import MySelect from '@/components/common/MySelect.vue'
import SvgIcon from '@/components/SvgIcon.vue'

const typ = ['Рекомендованные', 'Запрещенные']
const place = ['Весь файл', 'Первые', 'Последние']
const channel = ['Все', 'Оператор', 'Клиент']
const typmodel = ref('Рекомендованные')
const placemodel = ref('Весь файл')
const channelmodel = ref('Все')

const mystore = useStore()
// words.splice(0, 0, { key: 'fuckoff', selected: false, value: 'fuckyou', voc: true })
// const stringOptions = words.map((item) => (item.label = item.key))
// const stringOptions = [...words]
// const options = ref(stringOptions)
// const options = ref({ key: 'fuckoff', value: 'fuckyou', selected: false, voc: true })
// options.push({ key: 'fuckoff', value: 'fuckyou', selected: false, voc: true })
const options = [
	{
		label: 'Google',
		value: 'Google',
		description: 'Search engine',
		category: '1',
		voc: true,
	},
	{
		label: 'Facebook',
		value: 'Facebook',
		description: 'Social media',
		category: '1',
	},
	{
		label: 'Twitter',
		value: 'Twitter',
		description: 'Quick updates',
		category: '2',
	},
	{
		label: 'Apple',
		value: 'Apple',
		description: 'iStuff',
		category: '2',
	},
	{
		label: 'Oracle',
		value: 'Oracle',
		disable: true,
		description: 'Databases',
		category: '3',
	},
]
// const filterFn = (val, update, abort) => {
// 	update(() => {
// 		if (val === '') {
// 			options.value = stringOptions
// 		} else {
// 			const needle = val.toLowerCase()
// 			options.value = stringOptions.filter((v) => v.toLowerCase().indexOf(needle) > -1)
// 		}
// 	})
// }
const clear = () => {
	mystore.clearSelected()
}
const setOpt = () => {
	mystore.addKey('fuck')
}
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';

.grid {
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: grid;
	grid-template-columns: 1fr 210px 230px 130px;
	gap: 1rem;
}
.label {
	font-size: 0.8rem;
	font-weight: 600;
}
.lib {
	font-size: 0.8rem;
}
</style>
