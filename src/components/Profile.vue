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
				q-btn(label="Редактировать" unelevated color="primary")
		br
		br
		br
		br
		q-tabs(v-model="tab" dense active-color="primary" indicator-color="primary" align="left" )
			q-tab(name="one" label="Информация")
			q-tab(name="two" label="Настройки")
			q-tab(name="three" label="Безопасность")
		q-separator
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const tab = ref('one')
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.huge {
	height: 100px;
	background: url(@/assets/img/pult.jpg);
	background-size: cover;
	background-position: 0 30%;
	position: relative;
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
</style>
