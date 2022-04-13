<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import SvgIcon from '@/components/SvgIcon.vue'

// defineProps<{ msg: string }>()
const props = defineProps({
	msg: {
		type: String,
		default: 'fooo',
	},
})

const $q = useQuasar()
const count = ref(0)
const num = 1
const show = () => {
	$q.notify('Great!')
}
</script>

<template lang="pug">
h1 {{ msg }}

button(type="button" @click="count++") count is: {{ count }}
p Edit
q-btn(color="primary" icon="close" @click="show") test
br
SvgIcon(name="expand" color="var(--q-primary)" spin)
</template>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
