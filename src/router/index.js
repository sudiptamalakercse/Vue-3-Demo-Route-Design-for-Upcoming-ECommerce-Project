import { createRouter, createWebHistory } from 'vue-router';
import UserComponent from '../views/UserComponent.vue';
import AdminComponent from '../views/AdminComponent.vue';
import Post1ForUserComponent from '../views/Post1ForUserComponent.vue';
import Post2ForUserComponent from '../views/Post2ForUserComponent.vue';
import UpdatePost2ForUserComponent from '../views/UpdatePost2ForUserComponent.vue';
import Post1ForAdminComponent from '../views/Post1ForAdminComponent.vue';
import Post2ForAdminComponent from '../views/Post2ForAdminComponent.vue';
import UpdatePost2ForAdminComponent from '../views/UpdatePost2ForAdminComponent.vue';
const routes = [
	{
		path: '/',
		name: 'user',
		component: UserComponent,
		children: [
			{
				path: 'post1',
				name: 'post1_for_user',
				component: Post1ForUserComponent
			},
			{
				path: 'post2',
				name: 'post2_for_user',
				component: Post2ForUserComponent
			},
			{
				path: 'update_post2/:id',
				name: 'update_post2_for_user',
				component: UpdatePost2ForUserComponent,
				props: true
			}
		]
	},
	{
		path: '/admin',
		name: 'admin',
		component: AdminComponent,
		children: [
			{
				path: 'post1',
				name: 'post1_for_admin',
				component: Post1ForAdminComponent
			},
			{
				path: 'post2',
				name: 'post2_for_admin',
				component: Post2ForAdminComponent
			},
			{
				path: 'update_post2/:id',
				name: 'update_post2_for_admin',
				component: UpdatePost2ForAdminComponent,
				props: true
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
