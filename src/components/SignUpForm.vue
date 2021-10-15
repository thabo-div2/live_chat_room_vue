<template>
	<form @submit.prevent="handleSubmit">
		<input
			type="email"
			placeholder="example@web.com"
			required
			v-model="userEmail"
		/>
		<input
			type="text"
			placeholder="displayName"
			required
			v-model="displayName"
		/>
		<input
			type="password"
			placeholder="password"
			required
			v-model="userPassword"
		/>
		<div class="error">{{ error }}</div>
		<button>Sign Up</button>
	</form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignUp";

export default {
	setup(props, context) {
		const { error, signup } = useSignup();
		//  refs
		const displayName = ref("");
		const userEmail = ref("");
		const userPassword = ref("");

		const handleSubmit = async () => {
			await signup(userEmail.value, userPassword.value, displayName.value);
			if (!error.value) {
				context.emit("signup");
			}
		};

		return { displayName, userEmail, userPassword, handleSubmit, error };
	},
};
</script>

<style></style>
