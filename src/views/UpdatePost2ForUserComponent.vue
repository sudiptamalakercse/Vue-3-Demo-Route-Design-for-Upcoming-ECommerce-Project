<template>
	<div>
		<h4>Update Post 2 for User with Id {{ id }}</h4>
	</div>
</template>
<script>
export default {
	name: 'UpdatePost2ForUserComponent',
	props: {
		id: {
			type: String,
			required: true
		}
	}
};
</script>
