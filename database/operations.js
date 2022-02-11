const nedb = require('nedb-promise');
const database = new nedb ({ filname: 'accounts.db', autload: true});