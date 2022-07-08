<template lang="pug">
q-splitter(v-model="split2" :limits="[30, 80]" :style="hei")
	template(v-slot:before)
		.q-px-sm
			.text-h6 {{props.selected}}
			q-tab-panels(v-model="selected" animated transition-prev="jump-up" transition-next="jump-up" )
				template(v-for="item in list" :key="item.id")
					q-tab-panel(:name="item.label")
						.row.justify-between.text-overline
							div Подкатегории
							div Словари
						q-list.podcat
							q-item(clickable v-for="(podcat, index) in item.childs")
								q-item-section {{ podcat.label }}
								q-item-section(side)
									.row.items-center
										SvgIcon(name="vocabulary").small
										span {{ podcat.label }}

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
import { useCategory } from '@/stores/category'
import SvgIcon from '@/components/SvgIcon.vue'
import KeywordList from '@/components/KeywordList.vue'
import { useQuasar } from 'quasar'

const props = defineProps({
	selected: {
		type: String,
		default: 'Категория',
	},
})

const cat = useCategory()
const $q = useQuasar()
const split2 = ref(50)
const list = ref(cat.catList)
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
</style>
