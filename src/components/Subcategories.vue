<template lang="pug">
q-splitter(v-model="split2" :limits="[30, 80]" :style="hei")
	template(v-slot:before)
		.related
			.text-h6 {{props.selected}}
			q-tab-panels(v-model="selected" animated transition-prev="jump-up" transition-next="jump-up" )
				template(v-for="(item, index) in list" :key="item.id")
					q-tab-panel(:name="item.label")
						component(:is="draggable" class="list-group" :list="item.childs" group="subcat" itemKey="id")
							template(#header)
								div
									.list
										.podzag Подкатегория
										.podzag Словарь
									.empty(v-if="item.childs.length === 0") Раздел не настроен.
							template(#item="{ element }")
								.list.item
									div
										|{{element.name}}
										q-popup-edit(v-model="element.name" auto-save v-slot="scope").border-primary
											q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
									div
										component(:is="SvgIcon" name="vocabulary").small.q-mr-sm
										|{{element.label}}
									q-icon(name="mdi-close" size="xs" @click="killCat(index, element)").del

			q-btn(v-morph:btn1:categ:200.resize="morphGroupModel1" @click="nextMorph1" round color="primary" icon="mdi-plus" size="md").fab1
			q-card(v-morph:card2:categ:200.resize="morphGroupModel1").ccc
				.text-subtitile1 Новая подкатегория
				q-input(v-model="newsubcat" dense outlined bg-color="white" autofocus)
				.row.justify-between.q-mt-sm
					q-btn(flat label="Отмена" @click="nextMorph1")
					q-btn(flat label="ОК" @click="nextMorph1")

	template(v-slot:after)
		.right
			q-tabs(v-model="tabs" inline-label indicator-color="primary" no-caps dense align="left")
				q-tab(name="Voc")
					SvgIcon(name="vocabulary").q-mr-sm
					|Словари
				q-tab(name="Rec" icon="mdi-toy-brick-search-outline")
					span.q-mx-sm Запросы
					q-badge(color="orange" label="Скоро!")
			q-tab-panels(v-model="tabs" animated).cool
				q-tab-panel(name="Voc")
					q-scroll-area(:style="hei1")
						component(:is="KeywordList")
				q-tab-panel(name="Rec")
					.row.items-center
						img(src="@/assets/img/man.svg" v-if="cli").q-mr-md
						img(src="@/assets/img/man1.svg" v-else).q-mr-md
						q-btn(unelevated label="Когда?" color="primary" @click.once="show" v-if="cli")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
import { useCategory } from '@/stores/category'
import SvgIcon from '@/components/SvgIcon.vue'
import KeywordList from '@/components/KeywordList.vue'
import { useQuasar } from 'quasar'
import { getMembers } from '@/utils/utils'

const props = defineProps({
	selected: {
		type: String,
		default: 'Категория',
	},
})

const cat = useCategory()
const $q = useQuasar()
const split2 = ref(60)

const list = computed(() => {
	return getMembers(cat.categories)
})

// const list = cat.catList

const tabs = ref('Voc')
const cli = ref(true)

const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 190) + 'px;'
})
const hei1 = computed(() => {
	return 'height: ' + (window.innerHeight - 265) + 'px;'
})
const show = () => {
	$q.notify({
		icon: 'mdi-heart',
		message: 'Спасибо! Ваш голос учтен.',
	})
	cli.value = !cli.value
}

const undo = (i: number, e: any) => {
	list.value[i].childs!.push(e)
}

const killCat = (i: number, e: any) => {
	let ind = list.value[i].childs!.indexOf(e)
	list.value[i].childs!.splice(ind, 1)
	let message = e.label + ' - удалено.'
	$q.notify({
		message: message,
		color: 'negative',
		actions: [
			{
				label: 'Вернуть',
				color: 'white',
				handler: () => undo(i, e),
			},
		],
	})
}

const morphGroupModel1 = ref('btn1')

const nextMorphStep1: any = {
	btn1: 'card2',
	card2: 'btn1',
}

const newsubcat = ref('')
const nextMorph1 = () => {
	if (newsubcat.value.length > 2) {
		let current = list.value.find((e) => e.label === props.selected)
		let newitem = {
			id: list.value.length,
			name: newsubcat.value,
			label: '',
			typ: 1,
		}
		current?.childs?.push(newitem)
		newsubcat.value = ''
	}

	morphGroupModel1.value = nextMorphStep1[morphGroupModel1.value]
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';

.q-tab-panels {
	border-radius: $radius-md;
	box-shadow: $card-shadow;
}
.right {
	padding-left: 0.5rem;
}
.cool {
	background: transparent;
	box-shadow: none;
	margin-top: 0;
}
.small {
	font-size: 0.7rem;
}
.podzag {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.75rem;
	letter-spacing: 1px;
	color: grey;
	border-bottom: 1px solid #ccc;
}
.list {
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 2rem;
	position: relative;
	&.item {
		padding: 0.5rem 1rem;
		background: #fff;
		cursor: pointer;
	}
	&:hover {
		background: #efefef;
		.del {
			display: block;
		}
	}
	.del {
		position: absolute;
		right: 6px;
		top: 10px;
		display: none;
	}
}
.list-group:empty {
	padding-bottom: 3rem;
}
.empty {
	background: $bgMain;
	padding: 0.5rem 1rem;
	font-size: 0.9rem;
	font-style: italic;
	color: #999;
	border: 1px solid #ccc;
	margin-top: 0.5rem;
}
.related {
	position: relative;
	margin: 0 0.5rem;
	height: 100%;
}
.fab1 {
	position: absolute;
	bottom: 0.8rem;
	left: 0;
	z-index: 10;
}
.ccc {
	position: absolute;
	bottom: 0.5rem;
	left: 0;
	background: $primary;
	color: white;
	width: 250px;
	z-index: 10;
	border-bottom-left-radius: 1.5rem;
	padding: 1rem;
}
.test {
	width: 100px;
	height: 100px;
	background: pink;
}
</style>
