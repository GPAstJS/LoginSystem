const timestamps = document.getElementById('timestamps')
const status = document.getElementById("status")
const timeLeft = document.getElementById('timeLeft')

const date = new Date()

if(date.getHours() < 10 && date.getMinutes() < 10 ) {
    timestamps.innerText = `You logged in at 0${date.getHours()}:0${date.getMinutes()}`
} else if (date.getHours() < 10) {
    timestamps.innerText = `You logged in at 0${date.getHours()}:${date.getMinutes()}`
} else if (date.getMinutes() < 10) {
    timestamps.innerText = `You logged in at ${date.getHours()}:0${date.getMinutes()}`
} else {
    timestamps.innerText = `You logged in at ${date.getHours()}:${date.getMinutes()}`
}



