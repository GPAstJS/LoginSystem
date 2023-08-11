const password = document.getElementById("password")
const user = document.getElementById("user")
const button = document.getElementById("loginButton")

button.onclick = () => {
    if (sessionStorage.getItem("password") == password.value && sessionStorage.getItem("username") == user.value) {
        window.open("http://127.0.0.1:5500/StatusPage/index.html", "_self")
    } else alert("Username ou password incorreto!")
}
