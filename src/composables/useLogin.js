import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const login = async (userEmail, userPassword) => {
	error.value = null;
	try {
		const res = await projectAuth.signInWithEmailAndPassword(
			userEmail,
			userPassword,
		);
		error.value = null;
		console.log(res.user);
		return res;
	} catch (err) {
		console.log(err.message);
		error.value = err.message;
	}
};

const useLogin = () => {
	return { error, login };
};

export default useLogin;
