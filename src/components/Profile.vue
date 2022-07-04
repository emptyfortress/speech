<template lang="pug">
q-page(padding)
	.container
		.huge
			.ava
				.q-avatar
					img(src="@/assets/img/user0.svg")
				div
					.text-weight-bold Голомудько
					.name Разубай Буранович
				q-space
				q-btn(label="Выйти" unelevated color="primary")
			q-btn(color="white" round icon="mdi-camera" text-color="black" size="sm").photo
		br
		br
		br
		br
		q-tabs(v-model="tab" dense active-color="primary" indicator-color="primary" align="left" )
			q-tab(name="info" label="Информация")
			q-tab(name="setup" label="Права")
			q-tab(name="notific" label="Уведомления")
			q-tab(name="login" label="Безопасность")
		q-separator

		q-tab-panels(v-model="tab" animated)
			q-tab-panel(name="info")
				.inf( v-if="inf") Чтобы изменить значения кликните по нему.
					q-btn(flat round icon="mdi-close" dense size="10px" @click="inf = false")
				.mygrid
					template(v-for="item in items" :key="item.id")
						.label {{item.label}}:
						.value(@click="edit = true")
							|{{item.value}}
							q-popup-edit(v-model="item.value" auto-save v-slot="scope").border-primary
								q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
				q-separator.q-mt-lg
				q-card-actions(v-if="edit")
					q-btn(flat color="primary" @click="edit = false") Отмена
					q-btn(unelevated color="primary" @click="edit = false") Сохранить
			q-tab-panel(name="setup")
				.mygrid1
					template(v-for="item in prava" :key="item.id")
						.label {{item.label}}:
						.value {{item.value}}
			q-tab-panel(name="notific")
				q-list(separator)
					q-item(clickable v-for="n in 7" :key="n")
						q-item-section
							q-item-label Настройка {{n}}
							q-item-label(overline) дескрипшн настройки
						q-item-section(side)
							q-checkbox(v-model="check[n]")
				q-card-actions()
					q-btn(flat color="primary") Отмена
					q-btn(unelevated color="primary") Сохранить
			q-tab-panel(name="login")
				.text-h6 one
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const tab = ref('info')
const inf = ref(true)
const edit = ref(false)
const prava = [
	{ id: 1, label: 'Регионы', value: 'Северо-Западный, Центральный, Сибирский' },
	{ id: 2, label: 'Группы операторов', value: 'Группа 1, Подготовительная группа' },
	{
		id: 3,
		label: 'Операторы',
		value:
			'Екатерина, Елена, Ксения, Ирина, Ева, Дарья, Кира, Елизавета, Ульяна, Татьяна, Юлия, Софья, Алина, Злата, Милана, Ольга, Светлана, Ярослава, Яна, Кристина, Алиса, Маргарита, Таисия, Тамара, Эмилия, Диана, Анфиса, Аделина, Евдокия, Зоя, Ираида, Наталья, Пелагея, Сабина, Антонина',
	},
]
const items = reactive([
	{ id: 1, label: 'Логин', value: 'razubai' },
	{ id: 2, label: 'Почта', value: 'razubai@mail.ru' },
	{ id: 3, label: 'Имя', value: 'Разубaй' },
	{ id: 4, label: 'Отчество', value: 'Буранович' },
	{ id: 5, label: 'Фамилия', value: 'Голомудько' },
	{ id: 6, label: 'Местоположение', value: 'Санкт-Петербург' },
])
const check = ref([false, true, true, false, true, false, false, false, false, false])

const test = () => {
	console.log(1)
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/myvariables.scss';
.huge {
	height: 100px;
	background: url(@/assets/img/abstract.jpg);
	background-size: cover;
	background-position: 0 30%;
	position: relative;
}
.photo {
	position: absolute;
	bottom: -70px;
	left: 40px;
}
.ava {
	height: 100px;
	width: 100%;
	position: absolute;
	bottom: -70px;
	left: 0;
	display: flex;
	padding-left: 50px;
	justify-content: flex-start;
	align-items: flex-end;
	gap: 2rem;
	font-size: 1.2rem;
	.q-avatar {
		width: 100px;
		height: 100px;
		background: $blue;
		border: 2px solid white;
	}
}
.mygrid {
	display: grid;
	grid-template-columns: auto 200px;
	justify-content: start;
	gap: 1rem;
	grid-column-gap: 2rem;
}
.mygrid1 {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-content: start;
	gap: 1rem;
	grid-column-gap: 2rem;
}
.q-tab-panels {
	min-height: 500px;
	box-shadow: $card-shadow;
	padding: 1rem;
	border-radius: 0 0 4px 4px;
	font-size: 0.9rem;
}
.value {
	font-weight: bold;
	cursor: pointer;
}
.inf {
	background: $bgLight;
	border: 1px solid #dedede;
	font-size: 0.7rem;
	padding: 0.3rem 0.6rem;
	margin-bottom: 2rem;
	position: relative;
	.q-btn {
		position: absolute;
		right: 3px;
		top: 2px;
	}
}
</style>
