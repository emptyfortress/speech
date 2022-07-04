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
			q-tab(name="setup" label="Настройки")
			q-tab(name="notific" label="Уведомления")
			q-tab(name="login" label="Безопасность")
		q-separator

		q-tab-panels(v-model="tab" animated)
			q-tab-panel(name="info")
				.mygrid
					.label fij
					.value lajsdlaj
					q-btn(flat round icon="mdi-pencil-outline")
			q-tab-panel(name="setup")
				.text-h6 one
			q-tab-panel(name="notific")
				.text-h6 one
			q-tab-panel(name="login")
				.text-h6 one
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const tab = ref('info')
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
	grid-template-columns: 300px 200px 40px;
	gap: 1rem;
}
.q-tab-panels {
	min-height: 500px;
	box-shadow: $card-shadow;
}
</style>
