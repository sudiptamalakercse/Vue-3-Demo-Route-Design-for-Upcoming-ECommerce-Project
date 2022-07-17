<template>
	<div>
		<h3>Admin Component</h3>
		<NavbarAndSidebarForAdminComponent></NavbarAndSidebarForAdminComponent>
		<router-view></router-view>
	</div>
</template>
<script>
import NavbarAndSidebarForAdminComponent from '@/views/NavbarAndSidebarForAdminComponent.vue';
export default {
	name: 'AdminComponent',
	components: {
		NavbarAndSidebarForAdminComponent
	},
	setup() {}
};
</script>
