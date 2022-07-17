<template>
	<div>
		<h4>Update Post 2 for Admin with Id {{ id }}</h4>
	</div>
</template>
<script>
export default {
	name: 'UpdatePost2ForAdminComponent',
	props: {
		id: {
			type: String,
			required: true
		}
	}
};
</script>
