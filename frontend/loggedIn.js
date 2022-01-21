const logoutButton = document.querySelector('#logout-button');
const emailElemn = document.querySelector('#email')
const removeButton = document.querySelector('#remove-Button');

async function isLoggedIn() {
    const response = await fetch('http://localhost:5000/api/loggedin');
    const data = await response.json();

    console.log(data);

    if (data.loggedIn == false) {
        window.location.href = 'http://localhost:5000/';
    } 
}


async function logout() {
    const response = await fetch('/http://localhost:5000/api/logout');
    const data = await response.json();
    console.log(data);

    if(data.success) {
        window.location.href = 'http://localhost:5000';
    }
}


async function getAccountInformation() {
    const response = await fetch('http://localhost:5000/api/account');
    const data = await response.json();
    
    console.log(data);
    emailElemn.innerHTML = 'E-post: ${data.email}';
}


async function RemoveAccount() {
    const response = await fetch('http://localhost:5000/api/remove');
    const data = await response.json();
    
    console.log(data);
}

logoutButton.addEventListener('click', () => {
    logout();
});

removeButton.addEventListener('click', () => {
    removeAccount();
});

isLoggedIn();
getAccountInformation();