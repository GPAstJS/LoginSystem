const password = document.getElementById("password");
const user = document.getElementById("user");
const button = document.getElementById("registerButton")
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const capitalLetters = /[A-Z]/
const numbers = /[0-9]/


button.onclick = () => {

    if (user.value.length < 5) {
        alert("Username must be greather than 4 characters")
    }

    if (password.value.length < 5) {
    }

    if (specialChars.test(password.value) == true &&
        capitalLetters.test(password.value) == true &&
        numbers.test(password.value)) {

        sessionStorage.setItem("username", user.value)
        sessionStorage.setItem("password", password.value)

        window.open("http://127.0.0.1:5500/SignIn/index.html", "_self")
    } else alert("Password must contain 1 capital letter, 1 special character and 1 number")
}




