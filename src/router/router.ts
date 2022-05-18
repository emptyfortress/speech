import { createRouter, createWebHashHistory } from 'vue-router'
// import Report from '@/components/Report.vue'
// import Compare from '@/components/Compare.vue'
// import Conversation from '@/components/Conversation.vue'
// import Requests from '@/components/Requests.vue'
// import Checklists from '@/components/Checklists.vue'
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
			meta: { transition: 'slide-left', title: 'Speech Drive', requiresAuth: false },
		},
		{
			path: '/report',
			component: () => import('@/components/Report.vue'),
			props: { variant: 'success' },
			meta: { transition: 'slide-left', title: 'Отчеты', requiresAuth: false },
		},
		{
			path: '/compare',
			component: () => import('@/components/Compare.vue'),
			props: { variant: 'success' },
			meta: { transition: 'slide-left', title: 'Сравнить', requiresAuth: false },
		},
		{
			path: '/checklists',
			component: () => import('@/components/Checklists.vue'),
			props: { variant: 'success' },
			meta: { transition: 'slide-left', title: 'Чек-листы', requiresAuth: false },
		},
		{
			path: '/conversation',
			component: () => import('@/components/Conversation.vue'),
			props: { variant: 'success' },
			meta: { transition: 'slide-left', title: 'Диалоги', requiresAuth: false },
		},
		{
			path: '/requests',
			component: () => import('@/components/Requests.vue'),
			props: { variant: 'success' },
			meta: { transition: 'slide-left', title: 'Логические запросы', requiresAuth: false },
		},
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
