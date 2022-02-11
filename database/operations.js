const nedb = require('nedb-promise');
const database = new nedb ({ filname: 'accounts.db', autload: true});


async function getAccountByUsername(username) {
    const account = await database.find({ username: username });
    return account;
}

function saveAccount(account) {
    database.insert(account);
}

function saveMenu() {
    database.insert(menu);
}

async function getMenu() {
    const menu = await database.find({ type: 'coffee-menu' });
    return menu;
}

function createOrderContainer() {
  database.insert({ type: 'coffee-orders', orders: [] });
}

function saveOrder(order) {
  // Letar först upp vårt objekt som heter coffee-orders och sedan i arrayen orders pushar in beställningen (order)
  database.update({ type: 'coffee-orders' }, { $push: { orders: order } }, {});
}

module.exports = { getAccountByUsername, saveAccount, saveMenu, getMenu, 
    createOrderContainer, saveOrder }