const new_db = window.indexedDB.open('accounts', 1);

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

    table.createIndex('username', 'username', { unique: false });
    table.createIndex('password', 'password', { unique: false })

    console.log('table', table)
})

button.onclick = function addAccount(e) {
    e.preventDefault();

    const newAccount = { username: user.value, password: password.value };


    const transaction = db_out.transaction('[accounts]', 'readwrite');
    const objectStore = transaction.objectStore('accounts');
    const query = objectStore.add(newAccount);  

    query.addEventListener('success', () => {
        user.value = '';
        password.value = '';
    });
    transaction.addEventListener('error', () => console.log('Transaction error'));
}