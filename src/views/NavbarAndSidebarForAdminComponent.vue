<template>
	<div class="NavbarAndSidebar">
		<h4>Navbar And Sidebar For Admin</h4>
		<nav>
			<router-link to="/admin/post1">Post 1 for Admin</router-link> |
			<router-link to="/admin/post2">Post 2 for Admin</router-link> |
			<router-link :to="{ name: 'update_post2_for_admin', params: { id: 2 } }"
				>Update Post 2 for Admin with Id 2</router-link
			>
			|
		</nav>
	</div>
</template>
