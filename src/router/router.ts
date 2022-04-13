import { createRouter, createWebHashHistory } from 'vue-router'
import Test from '@/components/Test.vue'
import Home from '@/components/Home.vue'

declare module 'vue-router' {
	interface RouteMeta {
		// is optional
		isAdmin?: boolean
		// must be declared by every route
		requiresAuth: boolean
		title: string
	}
}

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			component: Home,
			meta: { transition: 'fade', title: 'Hove', requiresAuth: false },
		},
		{
			path: '/test',
			component: Test,
			props: { variant: 'success' },
			meta: { transition: 'fade', title: 'Docsvision', requiresAuth: false },
		},
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
