import { generateRandom, generateEta } from './utils/utils';
import { getAccountByUsername, saveAccount, saveMenu, getMenu, createOrderContainer, saveOrder } from './database/operations';

const usernameElem = document.querySelector('#username');
const password = document.querySelector('#password');
const purchaseButton = document.querySelectorAll('.purchase-button')
const PurchaseElem = document.querySelector('#Purchase');

const loginUsername = document.querySelector('#login-username');
const loginPassword = document.querySelector('#login-password');
const loginButton = document.querySelector('#login-button');

/*async function createAccount(accountInformation) {
    const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        body: JSON.stringify(accountInformation),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}
*/
async function login(loginInformation) {
    const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        body: JSON.stringify(loginInformation),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);

    if (data.success) {
        window.location.href = 'http://localhost:5000/loggedIn.html';
    }
}

async function testLogin(loginInformation) {
const account = await getAccountByUsername(loginInformation.userName);
console.log(account);

if (account.length > 0) {
    const correctPassword = await comparePassword(loginInformation.password, account[0].password);
    if (correctPassword) {
        resObj.success = true;

        // Vår token blir krypterad med vårt användarnamn som kopplar token till en användare
        const token = jwt.sign({ username: account[0].username }, 'a1b1c1', {
            expiresIn: 600 // Går ut om 10 min (värdet är i sekunder)
        });

        resObj.token = token;
    }
}

response.json(resObj);

}

purchaseButton.forEach((current) => {
    current.addEventListener('click', () => {
        console.log(generateRandom())
    })
}
);

loginButton.addEventListener("click", function() {
    let loginInformation = {
        username: loginUsername.value,
        password: loginPassword.value
    }

/*PurchaseElem.addEventListener('click', () => {
    Math.floor((Math.random() *100) +1);
})*/

    testLogin(loginInformation);
});