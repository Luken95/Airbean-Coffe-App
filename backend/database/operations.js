const nedb = require('nedb-promise');
const database = new nedb({ filename: 'users.db', autoload: true});

const users = [{
            "username": "Anders",
            "email": "anders@anders.se",
            "orderhistorik": []
        },

        {
            "username":"Bosse",
            "email":"bosse@bosse.se",
            "orderhistorik": []
        },

        {
            "username":"Christoffer",
            "email":"christoffer@christoffer.se",
            "orderhistorik": []
        }]


async function getUsers() {
    return await database.find({});
    
}

async function saveUsers() {
    database.insert(users)
}

async function findUser(username) {
    const account = await database.find({
        username: username
    });
    return account;

}

async function addOrder(username, order) {
  console.log(username);
  console.log(order);

    database.update({
        username: username
        },{
        $push: {
            orderhistorik: order
        }

    })
}

module.exports = {saveUsers, findUser, addOrder, getUsers}
