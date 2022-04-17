import { createRouter, createWebHashHistory } from 'vue-router'
import Reports from '@/components/Reports.vue'
import Compare from '@/components/Compare.vue'
import Conversation from '@/components/Conversation.vue'
import Requests from '@/components/Requests.vue'
import Checklists from '@/components/Checklists.vue'
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
			path: '/reports',
			component: Reports,
			props: { variant: 'success' },
			meta: { transition: 'slide-left', title: 'Something here', requiresAuth: false },
		},
		{
			path: '/compare',
			component: Compare,
			props: { variant: 'success' },
			meta: { transition: 'slide-left', title: 'Something here', requiresAuth: false },
		},
		{
			path: '/checklists',
			component: Checklists,
			props: { variant: 'success' },
			meta: { transition: 'slide-left', title: 'Something here', requiresAuth: false },
		},
		{
			path: '/conversation',
			component: Conversation,
			props: { variant: 'success' },
			meta: { transition: 'slide-left', title: 'Something here', requiresAuth: false },
		},
		{
			path: '/requests',
			component: Requests,
			props: { variant: 'success' },
			meta: { transition: 'slide-left', title: 'Something here', requiresAuth: false },
		},
	],
})

const DEFAULT_TITLE = 'DV Web-Client'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
