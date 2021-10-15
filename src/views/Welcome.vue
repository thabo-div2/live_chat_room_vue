<template>
	<div class="welcome container">
		<p>Welcome</p>
		<div v-if="showLogin">
			<h2>Login</h2>
			<Login @login="enterChat" />
			<p>
				No acoount yet? <span @click="showLogin = false">Sign Up</span> instead
			</p>
		</div>
		<div v-else>
			<h2>Sign Up</h2>
			<SignUpForm @signup="enterChat" />
			<p>
				Already have an account?
				<span @click="showLogin = true">Log In</span> instead
			</p>
		</div>
	</div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";
import Login from "../components/Login.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
	components: { SignUpForm, Login },
	setup() {
		const showLogin = ref(true);
		const router = useRouter();

		const enterChat = () => {
			router.push({ name: "Chatroom" });
		};

		return { showLogin, enterChat };
	},
};
</script>

<style>
.welcome {
	text-align: center;
	padding: 20px 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
/* form styles */
.welcome form {
	width: 300px;
	margin: 20px 0 10px;
}
.welcome label {
	display: block;
	margin: 20px 0 10px;
}
.welcome input {
	width: 100%;
	padding: 10px;
	border-radius: 20px;
	border: 1px solid #eee;
	outline: none;
	color: #999;
	margin: 10px auto;
}
.welcome span {
	font-weight: bold;
	text-decoration: underline;
	cursor: pointer;
}
.welcome button {
	margin: 20px auto;
}
</style>
