type registerFormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type validation<T, U> = (formData: T) => {status: boolean, error: U};



export const registerValidation: validation<registerFormData, registerFormData> = (formdata) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { username, email, password, confirmPassword } = formdata;
    let allOk = true;
    let error = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    if(username.trim() === '') {
        allOk = false;
        error.username = "Username can't be empty."
    }

    if(!emailRegex.test(email)){
        allOk = false;
        error.email = "Please provide valid email."
    }

    if(password.length < 8) {
        allOk = false;
        error.password = "Password should be more than 7"
    }

    if(confirmPassword !== password) {
        allOk = false;
        error.confirmPassword = "Passwrod not match."
    }

    return {
        status: allOk,
        error
    }
}