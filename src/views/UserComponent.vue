<template>
	<div>
		<h3>User Component</h3>
		<NavbarAndSidebarForUserComponent></NavbarAndSidebarForUserComponent>
		<router-view></router-view>
	</div>
</template>
<script>
import NavbarAndSidebarForUserComponent from '@/views/NavbarAndSidebarForUserComponent.vue';
export default {
	name: 'UserComponent',
	components: {
		NavbarAndSidebarForUserComponent
	},
	setup() {}
};
</script>
