<template>
	<form @submit.prevent="handleSubmit">
		<input
			type="email"
			placeholder="example@web.com"
			required
			v-model="userEmail"
		/>
		<input
			type="password"
			placeholder="password"
			required
			v-model="userPassword"
		/>
		<div class="error">{{ error }}</div>
		<button>Log In</button>
	</form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";

export default {
	setup(props, context) {
		const { error, login } = useLogin();

		//  refs
		const userEmail = ref("");
		const userPassword = ref("");

		const handleSubmit = async () => {
			await login(userEmail.value, userPassword.value);
			if (!error.value) {
				context.emit("login");
			}
		};

		return { userEmail, userPassword, handleSubmit, error };
	},
};
</script>

<style></style>
