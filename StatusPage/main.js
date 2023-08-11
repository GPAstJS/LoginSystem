const timestamps = document.getElementById('timestamps')
const status = document.getElementById("status")
const timeLeft = document.getElementById('timeLeft')

const date = new Date()

let timeActive = 5


sessionStorage.setItem("loginStatus", `${date.getHours()}:${date.getMinutes()}`)

timestamps.innerText = `You logged in at: ${sessionStorage.getItem("loginStatus")}`
timeLeft.innerText = `Remaining time before automatic logout: ${timeActive}s`


let timer = setInterval(() => {

    timeActive--
    console.log(timeActive)
    timeLeft.innerText = `Remaining time before automatic logout: ${timeActive}s`

    if (timeActive == 0) {
        setTimeout(timer)
        alert("Time is over, you must login once again to proceed.")

        sessionStorage.removeItem("loginStatus")

        window.open("http://127.0.0.1:5500/SignIn/index.html", '_self')

    }

}, 1000)



if (date.getHours() < 10 && date.getMinutes() < 10) {
    timestamps.innerText = `You logged in at 0${date.getHours()}:0${date.getMinutes()}`
} else if (date.getHours() < 10) {
    timestamps.innerText = `You logged in at 0${date.getHours()}:${date.getMinutes()}`
} else if (date.getMinutes() < 10) {
    timestamps.innerText = `You logged in at ${date.getHours()}:0${date.getMinutes()}`
} else {
    timestamps.innerText = `You logged in at ${date.getHours()}:${date.getMinutes()}`
}



