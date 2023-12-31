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

const new_db = window.indexedDB.open('accounts', 3);

new_db.addEventListener('error', () => console.error('Error opening DB'));

let db_out

new_db.addEventListener('success', () => {
    console.log("Successfully opening DB");
    db_out = new_db.result
    console.log('success', db_out.objectStoreNames)
});



new_db.addEventListener('upgradeneeded', init => {
    db = init.target.result;
    db_out = db

    db.onerror = () => {
        console.error("Error loading DB");
    }

    console.log('db dentro', db)

    const table = db.createObjectStore('accounts', { keyPath: 'id', autoIncrement: true });

    table.createIndex('username', 'username', { unique: true });
    table.createIndex('password', 'password', { unique: false })

    console.log('table', table)
})

button.onclick = function addAccount(e) {
    e.preventDefault();

    const newAccount = { username: user.value, password: password.value };


    const transaction = db_out.transaction(['accounts'], 'readwrite');
    const objectStore = transaction.objectStore('accounts');
    const query = objectStore.add(newAccount);  

    query.addEventListener('success', () => {
        user.value = '';
        password.value = '';
    });
    transaction.addEventListener('error', () => console.log('Transaction error'));
}