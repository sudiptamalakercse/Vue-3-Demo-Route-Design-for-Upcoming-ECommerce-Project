<template>
	<div class="NavbarAndSidebar">
		<h4>Navbar And Sidebar For User</h4>
		<nav>
			<router-link to="/post1">Post 1 for User</router-link> |
			<router-link to="/post2">Post 2 for User</router-link> |
			<router-link :to="{ name: 'update_post2_for_user', params: { id: 2 } }"
				>Update Post 2 for User with Id 2</router-link
			>
			|
		</nav>
	</div>
</template>
<style>
.NavbarAndSidebar {
	border-style: solid;
	padding: 1%;
}
</style>
